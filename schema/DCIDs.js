const mongoose = require('mongoose');

var DCIDSchema = new mongoose.Schema({
  iDc_id: String,
  iName: String,
  iStatus: String,
  iEnv: String,
  iType: String,
  iModel: String,
  iSerial: String,
  iCust_id: String,
  iUHeight: String,
  iPower: String,
  iConsumption: String,
  iCapacity: String,
  iHolds_by: String,
  iBusiness: String,
  tech_id: String,
  phase_id: String,
  contact_id: String,
  cur_cab_id: String,
  cur_uloc: String,
  cur_position: String,
  new_dc_id: String,
  new_cab_id: String,
  new_uloc: String,
  new_position: String,
  description: String
},{timestamps : true});

module.exports = mongoose.model('DCID', DCIDSchema);
