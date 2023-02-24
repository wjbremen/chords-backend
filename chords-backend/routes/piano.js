var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.end("sending data from express piano url"); 
});

module.exports = router; 