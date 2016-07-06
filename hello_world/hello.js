var http = require('http'); //How to require modules

http.createServer(function(request, response){
	response.writeHead(200); //Status code in header

	//Way I
	response.write("Hello, this is dog."); //Response body
	response.end(); //Close connection

	//Way II
	//response.end("Hello, this is dog."); //Close connection
}).listen(8080);

console.log("Listening on port 8080...");