const mongoose = require("mongoose"); 
const {Schema} = mongoose; 

const chordObjectSchema = new Schema({
    notations: {
        description: String, 
        other: {type: String, default: ""}, 
        short: String, 
        long: String, 
        shortHasSuperScript: Boolean, 
        longHasSuperScript: Boolean,
        longHtml: String,
        shortHtml: String
    }, 
    midiNotes: [Number],
    letterNotes: [String]
}); 

const chordsByRootSchema = new Schema({
    rootMidi: Number, 
    rootLetter: [String, String], 
    usingSharps : Boolean, 
    usingFlats : Boolean, 
    chords: [chordObjectSchema]
}); 



/*
//chordsByRoot collection

[ //collection
    { //root
        rootMidi: 68,
        rootLetter : ["C", "#"]  //root note and "#", "b", or "natural",
        chords: [
           {
            notations: {......}, 
            midiNotes: [ 84,85,86],
            letterNotes: ["E", "D", "G"]
           },
           {
            notations: {......}, 
            midiNotes: [ 84,85,86],
            letterNotes: ["E", "D", "G"]
           }, 
           ........
        ]
    },
    { //next root 
        rootMidi: 68, //same root midi diff root letter
        rootLetter: ["D", "b"],
        chords : [
            ........
        ]
    }, 
    ..................

]
*/

const ChordsByRoot= mongoose.model("ChordsByRoot", chordsByRootSchema); 
module.exports = ChordsByRoot; 