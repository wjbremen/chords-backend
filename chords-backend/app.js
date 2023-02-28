var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exportFilesRouter = require('./routes/exportFiles');
var pianoRouter = require('./routes/piano');
var guitarRouter = require('./routes/guitar');
//var getPianoFilesRouter = require("./routes/getPianoFiles"); 
var getChordDataRouter = require("./routes/getChordData"); 


var app = express();

const mongoose = require("mongoose"); 
const { mainModule } = require('process');
//mongoose.set("strictquery", false); 
const mongodb = 'mongodb://127.0.0.1:27017/test';

main().catch(err => console.log(err));

async function main(){
  await mongoose.connect(mongodb); 
  console.log("inside main"); 
}




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public') , {etag: false}));

app.get('/*', function(req, res, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next(); 
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/piano', pianoRouter);
app.use('/guitar', guitarRouter);
app.use('/exportFiles', exportFilesRouter);
app.use("/getChordData", getChordDataRouter); 
//app.use('/getPianoFiles', getPianoFilesRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({message: err.message, error: err})
});

module.exports = app;
