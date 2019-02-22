const mongoose = require('mongoose');

var EnvSchema = new mongoose.Schema({
  eName: {type:String, default: 'dcmapp'},
  eType: {type:String, default: 'dcmapp'},
  eColor: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('Env', EnvSchema);
