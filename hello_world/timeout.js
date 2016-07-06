var http = require('http'); //How to require modules

http.createServer(function(request, response){
	response.writeHead(200); //Status code in header
	response.write("<p>Dog is running.</p>"); //Response body
	setTimeout(function() {
		response.write("<b>Dog is done.</b>");
		response.end(); //Close connection	
	}, 5000); // 5 seconds
}).listen(8080);

console.log("Listening on port 8080...");