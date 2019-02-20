const mongoose = require('mongoose');

var EnvSchema = new mongoose.Schema({
  eName: String,
  eType: String,
  eColor: String,
  description: String
},{timestamps : true});

module.exports = mongoose.model('Env', EnvSchema);
