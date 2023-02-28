const express = require("express"); 
let router = express.Router(); 
const mongoose = require('mongoose');
//const MusicalKey = require("../../chordScripts/MusicalKey/MusicalKeyModel");
//const ChordsByRootModel = require("../../chordScripts/ChordsByRoot/ChordByRootModel");
const MusicalKey = require("./MusicalKeyModel"); 
const ChordsByRoot = require("./ChordByRootModel"); 
const fs = require('fs'); 
const { json } = require("express");


/*
const path = "./exportFiles.js";

try{
if(fs.existsSync(path)){
    console.log(path +  " exists"); 
} else {
    console.log(path +  " does NOT exist");
}
}
catch( err){
    console.log(err); 
}
*/

router.get("/", function(req,res,next) {
    MusicalKey.findOne({})
    .then( data => {
        return JSON.stringify(data); 
    })
    .then( jsonData => {
        res.send(jsonData);
    });
    
}); 

router.get("/byKey/all", function(req,res,next){
    //res.send("requested getChordData/byKey/all"); 
    MusicalKey.find({})
    .then( data => {
        console.log("data ,", data); 
        return JSON.stringify(data);
    })
    .then( jsonData => {
        //console.log(jsonData); 
        res.send(jsonData); 
    }); 
});

router.get("/byKey/:keyString/:modeString", function(req,res,next){
    res.send(`requested chords for key : ${req.params.keyString} ${req.params.modeString}`); 
});

router.get("/byRoot/:startMidi/:endMidi", function(req, res, next){
    //res.send(`requested chords by root for start note: ${req.params.startMidi} and end note: ${req.params.endMidi}`); 
    let startMidi = req.params.startMidi; 
    let endMidi = req.params.endMidi; 
    //let returnObj = {}; 
    //for(let note = startMidi; note <= endMidi; note++){
      //  await ChordsByRoot.find({rootMidi: note}).then( foundDoc => {returnObj[note] = foundDoc}); 
    //}
    let noteArray = []; 
    for(note = startMidi; note <= endMidi; note++){
        noteArray.push(note); 
    }
    ChordsByRoot.find( {
        rootMidi: {$in: noteArray}
    }).then( foundDocs => {
        res.send( {chordsByRoot: foundDocs}); 
    } );
    
}); 

module.exports = router; 