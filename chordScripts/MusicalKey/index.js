const chordLogic = require("./chordLogic"); 
const chordConstants = require("../chordConstants"); 
const allChords = require("./allChords"); 

function printPretty(arr){
    arr.forEach(octaveObject => {
        for (const [key, value] of Object.entries(octaveObject)) {
            console.log("scale degree: " + key);
            value.forEach((val) => {
                console.log(val ); 
            });
          }
          
    });
}

console.log("all chords in g major \n");
//console.log((allChords.allChordsAllOctaves(79, "major", "#"))); 

printPretty(allChords.allChordsAllOctaves(79, "major", "#")); 



/*
let midiNote = 60; 
let midiNoteObj = chordConstants.MIDI_NOTES[midiNote]; 
let letterNoteRepresentation = midiNoteObj.natural ? midiNoteObj.noteLetter 
: "" + midiNoteObj.flatLetter + "b / " + midiNoteObj.sharpLetter + "#"; 
console.log("root note is midi note " + midiNote, " which is "
+ letterNoteRepresentation); 

let midiNotesInMajorKey = chordLogic.getNotesInMajorKey(midiNote); 
console.log("midi notes in major key " + midiNotesInMajorKey);  

let sharpsAndFlats = chordLogic.doesThisMajorKeyContainSharpsOrFlats(midiNote); 
let containsSharps = sharpsAndFlats["sharps"]; 
let containsFlats = sharpsAndFlats["flats"]; 

console.log("major key 72 contains sharps : " + containsSharps + ",  contains flats: " + containsFlats) ; 
    
let str = ""; 
if ((containsFlats && containsSharps) || containsSharps){
    str = "#"; 
} else {
    str = "b"; 
} 

let letterNotesInMajorKey = chordLogic.midiNotesToLetters(midiNotesInMajorKey, str); 
console.log("letter notes in major key ", letterNotesInMajorKey); 

let modes = ["major", "ionian", "dorian", "phrygian" , "lydian", "mixolydian", "aeolian", "minor", "locrian"]; 

modes.forEach( (mode, index ) => {
    let midiNotes = chordLogic.getNotesInMode(midiNote, mode);
    let parentScale = chordLogic.getParentScale(midiNote, mode); 
    let sharpsAndFlats = chordLogic.doesThisMajorKeyContainSharpsOrFlats(parentScale); 
    let sharpsAndFlatsStr = ""; 
    if((sharpsAndFlats.sharps && sharpsAndFlats.flats) || sharpsAndFlats.sharps){
        sharpsAndFlatsStr = "#"; 
    } else {
        sharpsAndFlatsStr = "b"; 
    }
    let letterNotes = chordLogic.midiNotesToLetters(midiNotes, sharpsAndFlatsStr); 
    let outputNotes = letterNotes.map( note => {
         if (!note[1]) {
            return note[0]; 
         } else {
            return "" + note[0] + note[1]; 
         }
    }); 

    console.log(
        "midi note: " + midiNote + " letter : " + letterNoteRepresentation + 
        "\n midi notes: " + midiNotes + " \n " + 
        "mode :" + mode + ": " + outputNotes + "\n " + 
        "uses " + sharpsAndFlatsStr 
    ); 
}); 


console.log("\n");
console.log("\n"); 
midiNote = 79; 

console.log("midi note 79, G phrygian \n");
console.dir(allChords.allChordsInMode(midiNote, "phrygian", "b")); 
*/

/*
isValidMidiNote,  
    getParentScale, 
    getNotesInMode,

/*


for(i = 21; i < 112 ; i ++){
    console.log(i, chordLogic.doesThisMajorKeyContainSharpsOrFlats(i)); 
}; 
*/
// 
/*
let Cmajor = {
    notes : ["C", "E", "G"], 
};

let Gmajor = {
    notes : ["G", "B", "D"], 
};

let args = process.argv; 
let requestedChord = args[2]; 
console.log("requested Chord: ", requestedChord); 
let returnedChord; 

if(requestedChord == "C"){
    returnedChord = Cmajor; 
} 
else {
    returnedChord = Gmajor; 
}

console.log(returnedChord); 

*/