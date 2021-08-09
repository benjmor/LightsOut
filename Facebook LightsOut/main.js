var http = require("http");
var fs = require("fs");
var data = fs.readFileSync('benjamintest.txt');
var html = fs.readFileSync('htmltest.html');
const turnoff = require('./turnofflights');
const turnon = require('./turnonlights');
const Hs100Api = require('hs100-api');
//setTimeout(function(){turnoff.off()}, 5000);
//setTimeout(function(){turnon.on()}, 5000);
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   output = response.writeHead(200, {'Content-Type': 'text/html'});
   console.log(output)
   response.write(html);
   // Send the response body as "Hello World"
   //response.end('Hello World\n');
   response.end();
   //turnoff.off();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');