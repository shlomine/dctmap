const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = require('./schemadir/customer.js');

const uri = 'mongodb://root:password@localhost:27017/dcmapp_Base';

mongoose.connect(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} }).then(function(db){
  let newCollection = new Schema({});
  newCollection.save(function(err, results) {
      if (err) throw err;
      console.log(mongoose.connection.name+" Collection created!");
      mongoose.connection.close()
  });
});
