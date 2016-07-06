var fs = require('fs');

var file = fs.createReadStream("readme.md");
var newFile = fs.createWriteStream("readme_copy.md");

file.pipe(newFile); //or
//file.pipe(process.stdout); //or
//file.pipe(newFile, { end: false });

file.on('end', function(){
  newFile.end('Finished!');
});
