const mongoose = require('mongoose');

var SitesSchema = new mongoose.Schema({
  sName: String,
  sStatus: String,
  sLocation: String,
  description: String
},{timestamps : true});

module.exports = mongoose.model('Sites', SitesSchema);
