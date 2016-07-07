var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var redis = require('redis');
var redirClient = redis.createClient();

// Using server array
/*var messages = []; // store messages in array
var storeMessage =  function(name, data) {
	messages.push({name: name, data: data}); //add to end
	if (messages.length > 10) {
		messages.shift(); //remove the first
	}
}*/

// Using redis
var storeMessage =  function(name, data) {
	var message = JSON.stringify({name: name, data: data});
	redirClient.lpush("messages", message, function(err, reply) {
		redirClient.ltrim("messages", 0, 9); //keeps newest 10 items
	});
}

io.sockets.on('connection', function(client){
	console.log('Client connected...');
	
	// join new user, using server array
	/*client.on('join', function(name){
		messages.forEach(function(message){ //show the last 10 msgs
			client.emit("messages", message.name + ": " + message.data);
		});
		client.set('nickname', name);
		client.broadcast.emit('chat', name + " joined the chat");
	});*/

	// join new user, using redis
	client.on('join', function(name){
		redirClient.lrange("messages", 0, -1, function(err, messages) {
			messages = messages.reverse();

			messages.forEach(function(message){ //show the last 10 msgs
				message = JSON.parse(message);
				client.emit("message", message.name + ": " + message.data);
			});
		});

		client.broadcast.emit('add chatter', name);
		redirClient.smembers("names", function(err, names){
			names.forEach(function(name) {
				client.emit('add chatter', name);
			});
		});
		redirClient.sadd('chatters', name);
	});

	// send message
	client.on('messages', function(message) {
		client.get('nickname', function(error, name){
			client.broadcast.emit("messages", name + ": " + message);	
			client.emit("messages", name + ": " + message);
			storeMessage(name, message); //store msg
		});
	});

	// disconnect
	client.on('disconnect', function(name){
		client.get('nickname', function(err, name){
			client.broadcast.emit("remove chatter", name);	
			redisClient.srem("chatters", name);
		});
	});

});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080);
console.log("Listening on port 8080...");