var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.end("sending data from express piano url. Changing to make sure git works"); 
});

module.exports = router; 