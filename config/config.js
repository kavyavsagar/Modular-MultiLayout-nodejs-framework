'use strict';
/* 
 * Load enviornment configurations
 * Set the node environment variable if not set before
 * specific configuration
 **/
global.config = {};
var local_env = require('./env/'+process.env.NODE_ENV);

// Load generally used configs to the entire site 
global.config = {
	root: local_env.root,
	port:  local_env.port,
	host: local_env.host,
	db: local_env.db,
    template_engine : local_env.template_engine,
    theme:  local_env.theme,
    environment : local_env.environment
};

/*
 * DB configuration files included and declare db variables globally
 */
require('./db.js');