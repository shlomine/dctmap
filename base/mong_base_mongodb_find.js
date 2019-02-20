const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

const uri = 'mongodb://root:password@localhost:27017/dcmapp_Base';
mongoose.connect(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} }).then(function(db){

var action = function (err, collection) {
    collection.find({}).toArray(function(err, results) {
      if (err) throw err;
      console.log(results);
      mongoose.connection.close()
    });
};

mongoose.connection.db.collection('customers', action);

});
