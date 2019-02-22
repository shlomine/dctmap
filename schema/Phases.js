const mongoose = require('mongoose');

var PhasesSchema = new mongoose.Schema({
  pName: {type:String, default: 'dcmapp'},
  pDate: {type:String, default: 'dcmapp'},
  contact_id: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('Phases', PhasesSchema);
