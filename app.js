var http = require('http');

var app = require(__dirname+'/config/server.js');

/**
 * Start Server
 */
http.createServer(app).listen(config.port, function () {
  console.log('Express server listening on port http://' + config.host +":"+ config.port);
});