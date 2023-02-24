const chordConstants = require("../chordConstants"); 

//input : midiNotes should be array of numbers 
//input : sharpsOrFlats should be string length 1, either "b" or "#"
//returns: array of arrays 
// [ ["A", "b"], ["B", null], ["C", null], ["D", "b"] ]
// or [["A", "#"], ["B", null], "C", "#"]
const midiNotesToLetters = (midiNotes, sharpsOrFlats) => {
    if( !Array.isArray(midiNotes) || midiNotes.length == 0 ){
        throw new Error("args to MIDI_NOTES_TO_LETTERS should be an array of midi notes (numbers) "); 
    }
    if(sharpsOrFlats.length != 1  || (sharpsOrFlats != "b" && sharpsOrFlats != "#")) {
        throw new Error("args to MIDI_NOTES_TO_LETTERS should be 'b' or '#' , sharps or flats is " + sharpsOrFlats); 
    } 

    let returnArray= []; 

    midiNotes.forEach(number => {
        //number is invalid, out of bounds
        if(!number) {
            returnArray.push([null, null]); 

        }
        //valid number 
        else {
            let note = chordConstants.MIDI_NOTES[number]; 
            if (note["natural"]){
                returnArray.push(  [note["noteLetter"] , null] );
            }
            else {
                if(sharpsOrFlats == "b") {
                returnArray.push(  [note["flatLetter"], "b" ]  )
                }    
                else {
                returnArray.push( [ note["sharpLetter"], "#"] )
                }
            }
        }
    
    }); 

    return returnArray; 
}

function isValidMidiNote(note){
    if (typeof(note) === "number" && note >= 21 && note <= 108 ) {
        return true; 
    } else {
        return false; 
    }
}


// args: midiNote should be number 21 to 108 
//returns: array of midi notes in 1 octave of major key 
// not including octave(8th note) in midi number
//format (eg [80, 82, 84, 85, 87, 89, 91, 92])
function getNotesInMajorKey(midiNote) {
    //original note is valid (>21 and <108)
    if(!isValidMidiNote(midiNote)){
        throw new Error("arg to getNotesInMajorKey should be valid midi note between 21 and 108"); 
    }

    //w,w,h,w,w,w,h
    const steps = [2,2,1,2,2,2]; 
    const notesInKey = []; 
    let currentNote = midiNote; 
    notesInKey.push(currentNote); 

    steps.forEach(step => {
        //note is not >121 
        if(isValidMidiNote(currentNote+ step)){
            currentNote = currentNote+ step; 
            notesInKey.push(currentNote); 
        } else {
            //invalid note signified by null
            notesInKey.push(null); 
        }
    });

    return notesInKey; 
}
//input: midi note (number) between 21 and 108
//returns object with 2 keys {sharps: true, flats: false}
//enharmonic - sharps and flats will both be true  
//C major - both sharps and flats will be false 
function doesThisMajorKeyContainSharpsOrFlats(midiNote){
    if( !typeof(midiNote) == "number" || (midiNote < 21 || midiNote > 108)){
        throw new Error("args to doesThisMajorKeyContainSharpsOrFlats should be a number between 21 and 108"); 
    }
   
    let note =  chordConstants.MIDI_NOTES[midiNote];  

    if(note.natural){
        if(note.noteLetter == "C"){
            return {sharps: false, flats: false}; 
        } else if (note.noteLetter == "B"){
            return {sharps: true, flats: true}; 
        } else if (note.noteLetter == "F"){
            return {sharps: false, flats: true};
        } else if (note.noteLetter == "G" || note.noteLetter == "D" || note.noteLetter == "A" || note.noteLetter == "E"){
            return {sharps: true, flats: false}; 
        } else {
            throw new Error("condition not matched in if..else of doesThisMajorKeyContainSharpsorFlats"); 
        }
    } else {
        if(note.flatLetter == "B" || note.flatLetter == "E" || note.flatLetter == "A"){
            return {sharps: false, flats: true}; 
        } else if (note.flatLetter == "G" || note.flatLetter == "D") {
            return {sharps: true, flats: true}; 
        } else {
            throw new Error("condition not matched in if..else of doesThisMajorKeyContainSharpsorFlats"); 
        }
    }
}

//input: root note is the midi note that is the root of the mode
// integer between 21 and 108
//input: mode is desired mode- eg 'ionian', 'dorian'...
//input : will also accept 'minor' or 'major' for mode
//return: an array of midi notes in one octave of the mode 
// not including the start of the next octave (8th note)
// eg [80, 82, 84, 85, 87, 89, 91, 92]
function getNotesInMode(rootNote, mode){
    if(!isValidMidiNote(rootNote)){
        throw new Error("arg to getNotesInMode should be valid midi note between 21 and 108"); 
    }
    if(!isValidMode(mode)) {
        throw new Error("mode arg to getNotesInMode not valid musical mode"); 
    }

    //If G Dorian, for example
    // get G major scale, then flatten 3rd and 7th note
    //this is the 'parallel method' of finding the notes in the mode
    //as opposed to the parent scale method

    //get the major scale 
    let majorScale = getNotesInMajorKey(rootNote); 

    //amount to be added or subtracted from each scale degree of major scale
    //eq sharp would be 1, flat would be -1
    let offsets = {
        "major": [0,0,0,0,0,0,0], 
        "ionian": [0,0,0,0,0,0,0], 
        "dorian": [0,0,-1,0,0,0,-1], 
        "phrygian": [0,-1,-1,0,0,-1,-1], 
        "lydian": [0,0,0,1,0,0,0], 
        "mixolydian": [0,0,0,0,0,0,-1], 
        "minor": [0,0,-1,0,0,-1,-1], 
        'aeolian': [0,0,-1,0,0,-1,-1], 
        "locrian": [0,-1,-1,0,-1,-1,-1]
    }; 

    let offset = offsets[mode.toLowerCase()]; 

    return ( majorScale.map( (midiNote, index) => {
        //midi not is not valid or 
        //midi note goes out of bounds during operation eg 122
        if(midiNote == null || !isValidMidiNote( midiNote + offset[index]) ){
            return null; 
        } else {
            //return valid midi note
            return ( midiNote + offset[index] ); 
        }
    })); 

}

//input: string of a musical mode 
//return: true if string is a valid mode, returns false otherwise
function isValidMode(mode){
        return (
        ["major", "ionian", "dorian","phrygian" 
        ,"lydian","mixolydian","minor",'aeolian',"locrian"]
        .includes(mode.toLowerCase()) 
        ); 
}

function getParentScale(midiNote, mode){
    if(!isValidMidiNote(midiNote)){
        throw new Error("arg to getParentScale should be valid midi note between 21 and 108, note is " + midiNote); 
    }
    if(!isValidMode(mode)){
        throw new Error("arg to getParentScale should be valid musical mode (string) "); 
    }

    //subtract this many from root note of mode to get root of parent major scale
    let offset = {
        "major": 0, 
        "ionian": 0, 
        "dorian": 2, 
        "phrygian": 4, 
        "lydian": 5, 
        "mixolydian": 7, 
        "minor": 9, 
        'aeolian': 9, 
        "locrian": 11
    }; 

    //this will return the midi note (integer) that is the root of the parent scale
    if( isValidMidiNote (midiNote - offset[mode.toLowerCase()]) ){
        return ( midiNote - offset[mode.toLowerCase()] ); 
    } else {
        //resulting midi note is < 21
        return null; 
    }
        
}
module.exports = {
    getNotesInMajorKey, 
    midiNotesToLetters, 
    isValidMidiNote, 
    doesThisMajorKeyContainSharpsOrFlats, 
    getParentScale, 
    getNotesInMode, 
} ; 