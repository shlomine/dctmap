const mongoose = require('mongoose');

var ContactsSchema = new mongoose.Schema({
  fName: {type:String, default: 'dcmapp'},
  lName: {type:String, default: 'dcmapp'},
  company: {type:String, default: 'dcmapp'},
  role: {type:String, default: 'dcmapp'},
  phone: {type:String, default: 'dcmapp'},
  email: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('Contacts', ContactsSchema);
