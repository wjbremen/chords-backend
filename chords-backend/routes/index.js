var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("recieved a request at '/' "); 
  res.body = "sending response from rest api"; 
  res.send("response from rest api index "); 
});

module.exports = router;
