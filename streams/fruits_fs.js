var fs = require('fs');
var http = require('http');

var file = fs.createReadStream("fruits.txt");

file.on('readable', function() {
  var fruit = null;
  while (null !== (fruit = file.read())) {
	  console.log(fruit.toString());
	}
});