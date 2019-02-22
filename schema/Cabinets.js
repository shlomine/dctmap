const mongoose = require('mongoose');

var CabinetSchema = new mongoose.Schema({
  cabName: {type:String, default: 'Insert Cabinet Name'},
  cabStatus: {type:String, default: 'dcmapp'},
  cabType: {type:String, default: 'dcmapp'},
  cabLocation: {type:String, default: 'dcmapp'},
  cabHeight: {type:String, default: 'dcmapp'},
  cabWidth: {type:String, default: 'dcmapp'},
  room_id: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('Cabinet', CabinetSchema);
