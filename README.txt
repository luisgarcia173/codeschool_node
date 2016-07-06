## REAL-TIME WEB WITH NODE.JS ##

# INTRO TO NODE.JS

> Allows you to buil scalable  network applications using JavaScript on the server-side.
 - [Node.js: V8 JavaScript Runtime]

> What could you build:
 - Websocket Server (like a chat server)
 - Fast File Upload Client
 - Ad Server
 - Any Real-Time Data Apps

> What is node.js not:
 - Web Framework
 - For Beginners (it's very low level)
 - Multi-threaded (single threaded server)
 
> Print file Contents
 - Blocking Code:
  * Read file from Filesystem, set equal to "contents"
  * Print contents
  * Do something else
 - Non-Blocking Code:
  * Read file from Filesystem
   * whenever you're complete (callback), print the contents
  * Do something else
 
> Blocking vs Non-Blocking
 - Blocking Code:
  $ var contents = fs.readFileSync('/etc/hosts');
  $ console.log(contents);
  $ console.log('Doing something else');
  
 - Non-Blocking Code: (allow you read files in parallel)
  $ var fs = require('fs');
  $ fs.readFile('/etc/hosts', function(error, contents) {
  $   console.log(contents);
  $ });
  $ console.log('Doing something else');
 
> Event Loop
 - Checking for Events (Loop)
 - Known Events:
  * request
  * connection
  * close
 - Event Queue (Events processed one at a time)
  * close
  * request
  
> If Linux/Mac use Curl to check application 
 - curl http://localhost:8080
> If Windows (see on browser the result)
 - node <js_file>

# EVENTS

> Many objects in Node emit events
> Creating a custom event emitters:
	$ var EventEmitter = require('events').EventEmitter;
	
# STREAMS (Stable 2)

> What are Streams?
 - Streams can be readable, writeable, or both:
  $ http.createServer(function(request, response){ ... }
 - request/response are Streams
 
# MODULES

> npm (Node Package Modules): package manager node:
 - comes with node
 - module repository
 - dependency management
 - easily publish modules
 
> installing a npm package
 $ npm install request (install into local node_module directory)
  - usage var request = require('request');
 $ npm install request -g (install into global node_module directory)
 
> find modules
 $ npm search <module_name>
 
> define package.json **
 - should be in <app_root>/package.json
 - example:
 {
	"name": "<root_folder_name>",
	"version": "1.0.0",
	"dependencies": {
		"connect": "1.8.7",
		"underscore": "~1.3.3" (~ allow you to use all versions between 1.3.3 and 1.4.0, bad practice)
	}
 }
 - use npm install to add to node_modules directory

> Versioning
 > connect.1.8.7 (1=Major, 8=Minor, 7=Patch)
  - Major: Change the API (change existing methods, function names, ...)
	- Minor: Probably not change the API (new features)
	- Patch: Doesn't change the API (bug fixes)
	
# EXPRESS

> "Sinatra inspired web development framework for Node.js -- insanely fast, flexible, and simple"
 - Easy route URLs to callbacks
 - Middleware (from Connect)
 - Environment based configuration
 - Redirection helpers
 - File Uploads

> install Express.js
 $ npm install --save express

> PrettyJson
 $ npm install prettyjson -g

> install ejs
 $ npm install --save ejs