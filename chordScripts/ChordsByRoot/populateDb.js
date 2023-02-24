const mongoose = require('mongoose'); 
const ChordsByRoot = require("./ChordByRootModel");
const chordConstants = require("../chordConstants");
const chordsByRoot = require("./chordsByRoot"); 
const MusicalKey = require('../MusicalKey/MusicalKeyModel');


function createChordsByRootCollection(){
    let collection = []; 

    for(let midiNote = 21; midiNote <= 108; midiNote++){
        collection.push(chordsByRoot.chordsByRoot(midiNote, "#"));
        collection.push(chordsByRoot.chordsByRoot(midiNote, "b"));
    }
    return(collection);  
}

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    const collection = createChordsByRootCollection(); 

    for(const doc of collection){
        let exists = await ChordsByRoot.exists({rootLetter: doc.rootLetter, rootMidi: doc.rootMidi, usingSharps: doc.usingSharps, usingFlats: doc.usingFlats }); 
        if(exists){
            await ChordsByRoot.findOneAndReplace({rootLetter: doc.rootLetter, rootMidi: doc.rootMidi, usingSharps: doc.usingSharps, usingFlats: doc.usingFlats }, doc); 
        }
        else {
            let newDoc = new ChordsByRoot(doc);
            newDoc.save(); 
        }
    }

    let foundDocs = await ChordsByRoot.find({}); 
    let orderedDocs = []; 
    foundDocs.forEach(doc => {
        orderedDocs.push({rootMidi: doc.rootMidi, str: "rootMidi: " + doc.rootMidi + " rootLetter: " + doc.rootLetter + " using sharps : " + doc.usingSharps + " using flats : " + doc.usingFlats }) ; 
    }); 
    orderedDocs.sort((a,b) => {
        if(a.rootMidi > b.rootMidi ){
            return 1;
        }
        else {
            return -1; 
        }
    });

    console.log(orderedDocs); 
}

main().catch( err => console.log(err)); 

