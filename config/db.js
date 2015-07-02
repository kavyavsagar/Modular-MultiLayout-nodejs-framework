'use strict';

global.dbconnect = {};

var mongoose = require( 'mongoose' );

mongoose.connect(config.db); 

var Schema   = mongoose.Schema; 

global.dbconnect = {
            Schema: Schema,
            mongoose: mongoose           
        };