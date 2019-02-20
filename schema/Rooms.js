const mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  rName: String,
  rLocation: String,
  site_id: String,
  description: String
},{timestamps : true});

module.exports = mongoose.model('Room', RoomSchema);
