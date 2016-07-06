var express = require('express');
var request = require('request');
var url = require('url');

var app = express();

app.get('/tweets/:username', function(request, response){

	var username = request.params.username;

	var options = {
		protocol: 'http:',
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: { screen_name: username, count: 0}
	}

	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(response);

	//Using EJS (Template)
	request(url, function(err, res, body) {
		var tweets = JSON.parse(body);
		response.locals = {tweets: tweets, name: username};
		response.render('tweet.ejs');
	});
	
});

app.listen(8080);

console.log("Listening on port 8080...");