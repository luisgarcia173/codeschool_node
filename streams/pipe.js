var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);

	/*request.on('readable', function(){
		var chunk = null;
		while (null !== (chunk = request.read())) {
			response.write(chunck);
		}
	});

	request.on('end', function(){
		response.end();
	});*/

	// Replace all the above
	request.pipe(response);

}).listen(8080);

console.log("Listening on port 8080...");