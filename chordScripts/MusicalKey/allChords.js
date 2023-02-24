const chordLogic = require("./chordLogic"); 
const chordConstants = require("../chordConstants"); 

//transformations for each scale degree of major scale 
//to achieve each chord 

//1- 0, 3-4, 5-7, 
const transformations = {
    1: [
        [0,4,7,"major"],
        [0,7,"5"],
        [0,7,9,"5-add6"],
        [0,7,14,"5-add9"],
        [0,7,9,14,"5-add6/9"], 
        [0,4,7,11,"M7"],
        [0,4,7,9,14,"M-add6/9"],
        [0,4,7,11,14,"M9"],
        [0,4,7,14,"add2"],
        [0,4,7,11,14,17,"M11"],
        [0,4,7,17,"add4"],
        [0,4,7,11,14,17,21,"M13"],
        [0,4,7,21,"add6"],
        [0,2,7,"sus2"], 
        [0,5,7, "sus4"]
    ], 
    2: [
        [0,3,7,"minor"], 
        [0,7,"5"],
        [0,7,9,"5-add6"],
        [0,7,14,"5-add9"],
        [0,7,9,14,"5-add6/9"],
        [0,3,7,10,"m7"],
        [0,3,7,10,14,"m9"],
        [0,3,7,9,14,"m-add6/9"],
        [0,3,7,14,"m-add2"],
        [0,3,7,10,14,17,"m11"],
        [0,3,7,17,"m-add4"],
        [0,3,7,10,14,17,21,"m13"],
        [0,3,7,21,"m-add6"],
        [0,2,7,"sus2"], 
        [0,5,7, "sus4"]
    ], 
    3: [
        [0,3,7,"minor"],
        [0,7,"5"], 
        [0,7,8,"5-addb6"],
        [0,7,13,"5-addb9"],
        [0,7,8,13,"5-addb6/b9"],
        [0,3,7,10,"m7"],
        [0,3,7,10,13,"m7b9"],
        [0,3,7,13,"m-addb2"],
        [0,3,7,10,13,17,"m11b9"],
        [0,3,7,8,13,"m-addb6/b9"]
        [0,3,7,17,"m-add4"],
        [0,3,7,10,13,17,20,"m11b9b13"],
        [0,3,7,20,"m-addb6"],
        [0,5,7, "sus4"]
    ],
    4: [
        [0,4,7,"major"],
        [0,7,"5"], 
        [0,7,9,"5-add6"],
        [0,7,14,"5-add9"],
        [0,7,9,14,"5-add6/9"],
        [0,4,7,11,"M7"],
        [0,4,7,9,14,"M-add6/9"],
        [0,4,7,11,18, "M7#11"]
        [0,4,7,11,14,"M9"],
        [0,4,7,14,"add2"],
        [0,4,7,11,14,18,"M9#11"],
        [0,4,7,18,"add#4"],
        [0,4,7,11,14,18,21,"M13#11"],
        [0,4,7,21,"add6"],
        [0,2,7,"sus2"], 
    ],
    5: [
        [0,4,7,"major"], 
        [0,7,"5"],
        [0,7,9,"5-add6"],
        [0,7,14,"5-add9"],
        [0,7,9,14,"5-add6/9"],
        [0,4,7,10,"7"],
        [0,4,7,9,14,"M-add6/9"],
        [0,4,7,10,14,"9"],
        [0,4,7,14,"add2"],
        [0,4,7,10,14,17,"11"],
        [0,4,7,17,"add4"],
        [0,4,7,10,14,17,21,"13"],
        [0,4,7,21,"add6"],
        [0,2,7,"sus2"], 
        [0,5,7, "sus4"]
    ],
    6: [
        [0,3,7,"minor"], 
        [0,7,"5"],
        [0,7,8,"5-addb6"],
        [0,7,14,"5-add9"],
        [0,7,8,14,"5-addb6/9"],
        [0,3,7,10,"m7"],
        [0,3,7,10,14,"m9"],
        [0,3,7,14,"add2"],
        [0,3,7,8,14,"m-addb6/9"]
        [0,3,7,10,14,17,"m11"],
        [0,3,7,17,"m-add4"],
        [0,3,7,10,14,17,20,"m11b13"],
        [0,3,7,20,"m-addb6"],
        [0,2,7,"sus2"]
        [0,5,7, "sus4"]
    ],
    7: [
        // using /7 for half diminished  
        [0,3,6,"dim"], 
        [0,3,6,10,"/7"],
        [0,3,6,10,"m7b5"], /////same as /7 (half diminished seventh)
        [0,3,6,10,13,"/7b9"],
        [0,3,6,13,"addb2"],
        [0,3,6,10,13,17,"/b911"],
        [0,3,6,17,"dim-add4"],
        [0,3,6,10,13,17,20,"/b911b13"],
        [0,3,6,20,"dim-addb6"],
        [0,3,6,8,13,"dim-addb6/b9"],
        [0,5,6, "sus4dim5"]
    ]
}; 



//input : midi note 21 to 108
//mode : "major, minor, ionian, dorian, etc"
//sharps or flats '#' or "b"
//returns : object with keys 1-7 for degree of the key/scale
//each key is array of arrays containing midi notes for the chord
//with the last two elements of the array being the letter note (C, Bb, G#)
//and the extention/modification (m7, sus4)
function allChordsInMode(midiNote, mode, sharpsOrFlats){
    let modeLower = mode.toLowerCase(); 
    //find parent major midid note
    let parentMajor= chordLogic.getParentScale(midiNote, mode); 
    let currentNote = chordLogic.getParentScale(midiNote, mode); 
    //if null returned- note went out of bounds < 21
    if(!currentNote){
        currentNote = chordLogic.getParentScale(midiNote + 12, mode); 
    } 

    let sharpsOrFlatsSelector  = "";
    if(sharpsOrFlats == "#"){
         sharpsOrFlatsSelector = "sharpLetter";
    } else {
        sharpsOrFlatsSelector  = "flatLetter"; 
    }

    let chords = {};

    for(const [key, value] of Object.entries(transformations)){ 
        
        //chords[key];
        let scaleDegreeArray= [];
        //arrs = [ [0,3,7,'minor'], [], [], ]
        let arrs = transformations[key]; 
        //console.log("arrs: " , arrs); 
        arrs.forEach( (arr) => {
            //console.log("arr : " , arr); 
            if(arr) {
                let chordArr = []; 
                arr.forEach( (offset) => {
                    if( typeof(offset) != "number"){
                        if(chordLogic.isValidMidiNote(currentNote)){
                            chordArr.push( 
                                chordConstants.MIDI_NOTES[currentNote].natural ? chordConstants.MIDI_NOTES[currentNote].noteLetter 
                                : chordConstants.MIDI_NOTES[currentNote][sharpsOrFlatsSelector] + "" 
                                + sharpsOrFlats
                            );
                        }
                        chordArr.push(offset); 
                    } else {
                        if(chordLogic.isValidMidiNote(currentNote+ offset)){
                            chordArr.push(currentNote + offset); 
                        }
                        else {
                            chordArr.push(null); 
                        }
                    }
                });
                if(!chordArr.includes(null) || chordArr.length == 0){
                    scaleDegreeArray.push(chordArr); 
                }
            }
        });
        if(!scaleDegreeArray.length == 0){
            chords[key] = scaleDegreeArray; 
        }
        if ((key == "3" || key == 3) ){
            currentNote = currentNote + 1;
        } else {
            currentNote = currentNote + 2; 
        }
    }

    let degreeThatModeStartsOn = {
        "major": 1, 
        "ionian" : 1, 
        "dorian": 2, 
        "phrygian": 3, 
        "lydian": 4, 
        "mixolydian": 5, 
        "minor": 6, 
        "aeolian": 6, 
        "locrian": 7
    }; 

    let returnChords = {};
    if (modeLower == "major" || modeLower == "ionian"){
        returnChords = chords; 
    } else {
        returnChords[1] = chords[degreeThatModeStartsOn[modeLower]]; 
        let currentDegree = degreeThatModeStartsOn[modeLower]; 
        for (let i = 2; i <= 7; i ++) {
            currentDegree = currentDegree + 1; 
            if(currentDegree > 7) {
                currentDegree = 1; 
            }
            returnChords[i] = chords[currentDegree];  
        }  
    }

    return returnChords; 
}

function allChordsAllOctaves(midiNote, mode, sharpsOrFlats){
    //valid midi notes 21 to 108
    let note = midiNote;
    //get lowest valid midi note (lowest octave )
    while (note >=21){
        note = note -12; 
    }
    note = note + 12; 

    let allChordsInAllOctaves = []; 
    
    while(note <= 108){
        let chordsToPush = allChordsInMode(note, mode, sharpsOrFlats); 
        if (!(Object.keys(chordsToPush).length == 0)) {
            allChordsInAllOctaves.push( chordsToPush );            
        }

        note = note + 12; 
    }

    return allChordsInAllOctaves; 
}


module.exports = {allChordsInMode, allChordsAllOctaves}; 