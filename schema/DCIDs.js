const mongoose = require('mongoose');

var DCIDSchema = new mongoose.Schema({
  iDc_id: {type:String, default: 'dcmapp'},
  iName: {type:String, default: 'dcmapp'},
  iStatus: {type:String, default: 'dcmapp'},
  iEnv: {type:String, default: 'dcmapp'},
  iType: {type:String, default: 'dcmapp'},
  iModel: {type:String, default: 'dcmapp'},
  iSerial: {type:String, default: 'dcmapp'},
  iCust_id: {type:String, default: 'dcmapp'},
  iUHeight: {type:String, default: 'dcmapp'},
  iPower: {type:String, default: 'dcmapp'},
  iConsumption: {type:String, default: 'dcmapp'},
  iCapacity: {type:String, default: 'dcmapp'},
  iHolds_by: {type:String, default: 'dcmapp'},
  iBusiness: {type:String, default: 'dcmapp'},
  tech_id: {type:String, default: 'dcmapp'},
  phase_id: {type:String, default: 'dcmapp'},
  contact_id: {type:String, default: 'dcmapp'},
  cur_cab_id: {type:String, default: 'dcmapp'},
  cur_uloc: {type:String, default: 'dcmapp'},
  cur_position: {type:String, default: 'dcmapp'},
  cur_powerPort: {type:String, default: 'dcmapp'},
  new_dc_id: {type:String, default: 'dcmapp'},
  new_cab_id: {type:String, default: 'dcmapp'},
  new_uloc: {type:String, default: 'dcmapp'},
  new_position: {type:String, default: 'dcmapp'},
  new_powerPort: {type:String, default: 'dcmapp'},
  description: {type:String, default: 'dcmapp'}
},{timestamps : true});

module.exports = mongoose.model('DCID', DCIDSchema);
