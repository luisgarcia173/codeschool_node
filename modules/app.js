var hello = require('./custom_hello');
var gb = require('./custom_goodbye');
var make_request = require('./make_request');
var logger = require('./logger');

logger.info('This is some information');
logger.warn('something bad is happening');

hello();
gb.goodbye();

make_request("Hello guys!");