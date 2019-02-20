const mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  cName: String,
  cLocation: String,
  cProjM: String,
  cTechM: String,
  updated_at: { type: Date, default: Date.now }
},{timestamps : true});

module.exports = mongoose.model('Customer', CustomerSchema);
