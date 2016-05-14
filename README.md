# node-rest-request
Client HTTP request module

var Gopher = require('rest-request');

var request = new Gopher('http://google');

request.get('wather/:id/', {id:32});



