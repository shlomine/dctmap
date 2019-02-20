const mongoose = require('mongoose');

var CabinetSchema = new mongoose.Schema({
  cabName: {type:String, default: '!'},
  cabStatus: {type:String, default: '!'},
  cabType: {type:String, default: '!'},
  cabLocation: {type:String, default: '!'},
  cabHeight: {type:String, default: '!'},
  cabWidth: {type:String, default: '!'},
  room_id: {type:String, default: '!'},
  description: {type:String, default: '!'}
},{timestamps : true});

module.exports = mongoose.model('Cabinet', CabinetSchema);
