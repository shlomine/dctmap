/*
* Description: dcmapp database module
* Writen by : Shlomi Nechmad (HPE) - 050-8678766
*/

/*
 * dependencies
 */
var config = require('../config/config.js'),
dbactions = require('../modules/dbactions.js'),
logging = require('../modules/logging.js');
fs = require('fs');
const mongoose = require('mongoose')
    , Admin = mongoose.mongo.Admin;
mongoose.Promise = global.Promise;

/*
 * public methods
 */

// List all MongoDB Databases
exports.list_mdb = function(callback) {

const uri = 'mongodb://'+config.db.user+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/'+config.dcmapp.base;
var connection = mongoose.createConnection(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} });
connection.on('open', function() {
  new Admin(connection.db).listDatabases(function(err, result) {
      var array = [];
      var itemsProcessed = 0;
      result.databases.forEach(function(item) {
        array.push(item.name);
        itemsProcessed++;
        if(itemsProcessed === result.databases.length) {
          connection.close(function(err) {
            if (err) throw err;
            return callback(array);    
          });
        }
      });
  });
});

};

// List MongoDB Collections for cuid customer
exports.list_mcoll = function(cuid, callback) {

var dbs = dbactions.list_mdb(function(result) {
  var search = result.includes(config.dcmapp.title+'_'+cuid);
    if (search == false) {
      return callback('Failed !!! - '+cuid+' not exist');
    }
    if (search == true) {
      const uri = 'mongodb://'+config.db.user+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/'+config.dcmapp.title+'_'+cuid;
      mongoose.connect(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} })
        .then(function(db){
          mongoose.connection.db.listCollections().toArray(function(err, result) {
            var array = [];
            var itemsProcessed = 0;
            result.forEach(function(item) {
              array.push(item.name);
              itemsProcessed++;
              if(itemsProcessed === result.length) {
                mongoose.connection.close(function(err) {
                  if (err) throw err;
                  logging.logMessage(mongoose.connection.name+' Disconnected!');
                  return callback(array);    
                });
              }
            });
          });
        })
        .catch((err) => console.error(err));

    }
});

};

// Create MongoDB Database & collid Collection for customer cuid
exports.create_mdb = function(cuid, callback) {

var dbs = dbactions.list_mdb(function(result) {
  var search = result.includes(config.dcmapp.title+'_'+cuid);
    if (search == true) {
      return callback('Failed !!! - '+cuid+' already exist');
    }
    if (search == false) {
const uri = 'mongodb://'+config.db.user+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/'+config.dcmapp.title+'_'+cuid;
mongoose.connect(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} })
  .then(function(db){
    logging.logMessage(mongoose.connection.name+' Create succesfuly')
    roles = config.dcmapp.collect;
    roles.forEach(function (collid) {
      dbactions.create_mcollection(cuid, collid, function(result) {
        logging.logMessage('<<<< '+cuid+' table '+collid+' '+result);
      }); 
    });
  })
  .catch((err) => console.error(err));

  mongoose.connection.close(function(err) {
    if (err) throw err;
    logging.logMessage(mongoose.connection.name+' Disconnected!');
    return callback("DBOK");
  });

    }
});

};

// Create MongoDB collid Collection on customer cuid Database
exports.create_mcollection = function(cuid, collid, callback) {

const Schema = require(config.dcmapp.schema+collid+'.js');
let newCollection = new Schema({});
newCollection.save(function(err, results) {
if (err) throw err;
  logging.logMessage(mongoose.connection.name+'/'+collid+' Collection create succesfuly')
}); 

return callback("COLLOK");

};

// Drop MongoDB for cuid customer
exports.DropDB = function(cuid, callback) {

var dbs = dbactions.list_mdb(function(result) {
  var search = result.includes(config.dcmapp.title+'_'+cuid);
    if (search == false) {
      return callback('Failed !!! - '+cuid+' not exist');
    }
    if (search == true) {
      var Collection = '';
      const uri = 'mongodb://'+config.db.user+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/'+config.dcmapp.title+'_'+cuid;
      mongoose.connect(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} })
        .then(function(db){
          mongoose.connection.db.listCollections().toArray(function(err, result) {
            for (i = 0; i < result.length; i++) {
              Collection = result[i].name;
              mongoose.connection.db.dropCollection(Collection, function (err) {
                if (err) throw err;
                logging.logMessage(mongoose.connection.name+'_'+Collection+' Droped!');
                mongoose.connection.close(function(err) {
                  if (err) throw err;
                  logging.logMessage(mongoose.connection.name+' Disconnected!');
                  return callback('OK');
                });
              });
            }
          });
        })
        .catch((err) => console.error(err));
    }
});

};
