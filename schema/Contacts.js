const mongoose = require('mongoose');

var ContactsSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  company: String,
  role: String,
  phone: String,
  email: String,
  description: String
},{timestamps : true});

module.exports = mongoose.model('Contacts', ContactsSchema);
