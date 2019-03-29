var sinon= require('sinon');
var chance= require('./chance-config');

global.sinon = sinon;
global.chance = chance;

process.on('unhandledRejection', e => {
	console.log('unhandled rejection', e);
	process.exit(1);
});