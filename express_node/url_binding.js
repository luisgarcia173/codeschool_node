var url = require('url');
var request = require('request');

options = {
  // add URL options here
  protocol: 'http:',
	host: 'search.twitter.com',
	pathname: '/search.json',
	query: {q: "codeschool"}      
};

var searchURL = url.format(options);
console.log(searchURL);

//Requesting
request(searchURL, function(error, response, body) {
	console.log(body);
});