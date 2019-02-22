const mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  rName: {type:String, default: 'dcmapp'},
  rLocation: {type:String, default: 'dcmapp'},
  site_id: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('Room', RoomSchema);
