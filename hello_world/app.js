var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'}); //Set Full Head

  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });

}).listen(8080);

console.log("Listening on port 8080...");