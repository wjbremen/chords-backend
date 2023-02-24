var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.body = "guitar url"; 
    res.send("sending data from guitar url"); 
});

module.exports = router; 