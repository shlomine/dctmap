const mongoose = require('mongoose');

var SitesSchema = new mongoose.Schema({
  sName: {type:String, default: 'dcmapp'},
  sStatus: {type:String, default: 'dcmapp'},
  sLocation: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('Sites', SitesSchema);
