const mongoose = require('mongoose');

var CableSchema = new mongoose.Schema({
  cType: {type:String, default: 'dcmapp'},
  cLength: {type:String, default: 'dcmapp'},
  cAmount: {type:String, default: 'dcmapp'},
  cEnv: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('Cable', CableSchema);
