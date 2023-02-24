var express = require('express');
//const { path } = require('../app');
var router = express.Router();
const path = require("path"); 

router.get('/:midiNote', function(req, res, next) {
    //let sendString = "Will send audio files, req.params is " + JSON.stringify(req.params); 
    //res.send(sendString ); 
    let filename = "pianoMidiNote" + req.params.midiNote + ".mp3";  
     const options = {
        root: path.join(__dirname, "..", "public", "audioFilesPiano" ), 
     }
     res.sendFile(filename, options, (err)=> {
        if(err){
            next(err); 
        }
        else {
            console.log("sent " , filename); 
        }
     }); 
});

module.exports = router; 