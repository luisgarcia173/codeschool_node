var redis = require('redis');
var client = redis.createClient();

client.set("message1", "hello, yes this is dog.");
client.set("message2", "hello, no this is spider.");

client.get("message1", function(err, reply) {
	console.log(reply);
});

// keeps two first strings and removes the rest
client.lpush("messages", message, function() {
	client.ltrim("messages", 0, 1);
});
// or
// client.lpush('messages', message);

// replies with all string in list
client.lrange("messages", 0, -1, function(err, messages) {
	console.log(messages);
});

// using set, lists of unique data
// add
client.sadd("names", "Dog");
client.sadd("names", "Spider");
client.sadd("names", "Gregg");
// remove
client.srem("names", "Spider")
// list
client.smembers("names", function(err, names){
	console.log(names);
});
