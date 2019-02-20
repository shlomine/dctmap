const mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  cName: String,
  cLocation: String,
  cProjM: String,
  cTechM: String,
  cStartDate: String,
  cStatus: String
},{timestamps : true});

module.exports = mongoose.model('Customer', CustomerSchema);
