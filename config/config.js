/*
 * configuration
 */
var baseDir = '/dcmapp/';

module.exports = {
    dcmapp: {
	title: "dcmapp",
	base: "dcmapp_Base",
	schema: baseDir+'schema/',
        collect: [ 'Contacts','Phases','Sites','Rooms','Cabinets','DCIDs','Envs','Cables' ],
    },
    db: {
        host: "localhost",
        user: "root",
        port: "27017",
        password: "password",
    },
    files: {
        log: baseDir+'logs/dcmapp.log',
    },
    http: {
        host: '192.168.23.141',
	port: '3000',
    },
	interval: 10000 // milliseconds
};
