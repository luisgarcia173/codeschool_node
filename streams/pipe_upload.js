var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	var newFile = fs.createWriteStream("readme_copy.md");

	//to get upload progress
	var fileBytes = request.headers['content-length'];
	var uploadedBytes = 0;

	request.on('readable', function(){
		var chunk = null;
		while (null !== (chunk = request.read())) {
			uploadedBytes += chunk.length;
			var progress = (uploadedBytes / fileBytes) * 100;
			response.write("Progress: " + parseInt(progress, 10) + "%\n");
		}
	});

	request.pipe(newFile);
	
	request.on('end', function(){
		response.end('uploaded!');
	});
}).listen(8080);

console.log("Listening on port 8080...");