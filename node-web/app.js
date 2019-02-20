/*
* Description: dcmapp base function
* Writen by : Shlomi Nechmad (HPE) - 050-8678766
*/

/*
 * dependencies
 */
    var config = require('../config/config.js'),
    logging = require('../modules/logging.js');
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;

/*
 * Main Process
 */

// Set up mongoose connection

const uri = 'mongodb://'+config.db.user+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/'+config.dcmapp.base;
mongoose.connect(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} })
  .then(() =>  
    console.log(mongoose.connection.name+' connection succesful'),
    console.log('website on: http://'+config.http.host+':'+config.http.port)
  )
  .catch((err) => console.error(err));

var indexRouter = require('./routes/index');
var customersRouter = require('./routes/customers');
var dcmappRouter = require('./routes/dcmapp');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customers', customersRouter);
app.use('/dcmapp', dcmappRouter);

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
