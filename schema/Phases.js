const mongoose = require('mongoose');

var PhasesSchema = new mongoose.Schema({
  pName: String,
  pDate: String,
  contact_id: String,
  description: String
},{timestamps : true});

module.exports = mongoose.model('Phases', PhasesSchema);
