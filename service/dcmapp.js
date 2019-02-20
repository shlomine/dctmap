/*
* Description: dcmapp main function
* Writen by : Shlomi Nechmad (HPE) - 050-8678766
*/

/*
 * dependencies
 */
    var config = require('../config/config.js'),
    dbactions = require('../modules/dbactions.js'),
    logging = require('../modules/logging.js');

/*
 * Main Process
 */

var action=process.argv[2];
var cuid=process.argv[3];
var roles = new Array();
var tbllist = new Array();

switch(action) {
  case "list":
    dbactions.list_mdb(function(result) {
      console.dir(result);
      logging.logMessage('<<<< finish with Databases '+action+" >>>>");
    });
    break;
  case "collections":
    dbactions.list_mcoll(cuid, function(result) {
      console.dir(result);
      logging.logMessage('<<<< finish with '+cuid+' Collections '+action+" >>>>");
    });
    break;
  case "create":
    logging.logMessage("Create DB "+cuid);
    dbactions.create_mdb(cuid, function(result) {
      logging.logMessage('<<<< finish with '+cuid+' '+action+' '+result);
    });
    break;
  case "drop":
    logging.logMessage("About to drop DB "+cuid);
    dbactions.DropDB(cuid, function(result) {
      logging.logMessage('<<<< finish with '+cuid+' '+action+' '+result);
    });
    break;
  default:
    logging.logMessage("Missing argv input [list] | [create/collections/drop] Customer");
}
