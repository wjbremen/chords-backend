const mongoose = require("mongoose"); 
const {Schema} = mongoose;

const chordSchema = new Schema({
    notes: [Number], 
    root: String, 
    type: String
}); 

const scaleDegreeSchema = new Schema({
    scaleDegree: Number,
    chords: [chordSchema]
});

const octaveSchema = new Schema({
    octave: Number, 
    scaleDegree: [scaleDegreeSchema]

});

const musicalKeySchema = new Schema({
    key: [String, String], 
    sharpsOrFlats: String,
    chords : [octaveSchema]
});
//Musical Key collection 
/*
Collection 
[
    //musical key
    {
        key: ["C#", "major"], 
        chords: [
            {
                octave: 1, 
                scaleDegree: 
                    [
                        {
                            scaleDegee: 1, 
                            chords: [
                                {
                                    notes: [1,2,3], 
                                    root: "C",
                                    type: "major"
                                }, 
                                {
                                    notes: [1,4,5],
                                    root: "C",
                                    type: "maj7"
                                }
                            ]
                        }
                    ]
            }, 
            {

            }, 
            ....
        ]
    },
    {
        key: ["secondKey", "minor"], 
        chords: [....]
    },
    ...
    {
        key: ["lastkey", "dorian"], 
        chords: [....]
    }
]
*/
const MusicalKey = mongoose.model("MusicalKey", musicalKeySchema); 

module.exports = MusicalKey; 