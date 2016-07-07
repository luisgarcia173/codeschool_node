var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
	console.log('Client connected...');
	
	// join new user
	client.on('join', function(name){
		client.nickname = name;
	});

	// send message
	client.on('messages', function(data) {

		var nickname = client.nickname;

		client.broadcast.emit("messages", nickname + ": " + data); //broadcast message to all other clients connected

		client.emit("messages", nickname + ": " + data); //show message in the current client
	});
	//client.emit('messages', {hello: 'world'});
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080);
console.log("Listening on port 8080...");