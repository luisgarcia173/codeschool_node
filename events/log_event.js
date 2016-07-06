var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();
logger.on('error', function(message) { console.log('ERR: ' + message); });
logger.on('warn', function(message) { console.log('WARN: ' + message); });
logger.on('info', function(message) { console.log('INFO: ' + message); });

//usage
logger.emit('error','Spilled Milk');
logger.emit('warn','Eggs Cracked');
logger.emit('info','Chocolate Syrup');