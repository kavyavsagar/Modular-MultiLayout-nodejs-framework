'use strict';
var path = require('path');

module.exports = {
    root: path.join(__dirname, '../../'),
    port:  process.env.PORT || 2020,
    db: 'mongodb://localhost:27017/sleekjs',  
    host: 'localhost',
    template_engine : 'handlebars',
    theme : 'blue',
    environment : 'local',   
    app: {
        name: 'sample app'
    }
};