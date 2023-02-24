const express = require("express"); 
let router = express.Router(); 

router.get("/", function(req,res,next) {
    res.send("getChordData root"); 
}); 

router.get("/byKey/all", function(req,res,next){
    res.send("requested getChordData/byKey/all"); 
});

router.get("/byKey/:keyString/:modeString", function(req,res,next){
    res.send(`requested chords for key : ${req.params.keyString} ${req.params.modeString}`); 
});

router.get("/byRoot/:startMidi/:endMidi", function(req, res, next){
    res.send(`requested chords by root for start note: ${req.params.startMidi} and end note: ${req.params.endMidi}`); 
}); 

module.exports = router; 