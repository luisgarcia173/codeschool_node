var url = require('url');
var request = require('request');
var express = require('express');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app = express();

app.get('/', function(req, response){
	request(searchURL).pipe(response);
});

app.listen(8080);