'use strict';

// Setup all the routing 
var user = new Module('users').setRouter('user');
var comment = new Module('comment').setRouter('comment');


app.get('/', function (req, res) {	
	var lays = new Layout();
	lays._renderView('index', res);    
});