'use strict';

var express = require('express'),    
    hbs = require('express-handlebars'),
    path = require('path'),
    fs = require('fs');
/*
 * System configuration files included and declare system variables globally
 */
require('./config.js');

/*
 * Define apps and its use
 */
global.app = express();

// set all environments
app.set('port', config.port);
app.set('host', config.host);

// We keep the same public path so we can make use of the bootstrap assets
app.use(express.static(path.join(config.root, 'public')));


// Only use logger for development environment
var env = config.environment;

if (env === 'development') { 
  // development only

}
if (env === 'production') {
    // production only    
}
// load core lib
global.Module = require('../public/lib/core.lib.js').Module;
global.Layout = require('../public/lib/core.lib.js').Layouts;

// Setup all the routing 
require('./routes.js');

module.exports = app;