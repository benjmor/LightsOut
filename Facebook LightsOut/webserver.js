var express = require('express') //include the express module -- access it by using "express."
var myParser = require("body-parser"); //include the body-parser module -- access it by using "myParser."
var app = express() //Create a new instance of express. Access the instance using "app."
var fs = require("fs"); //filestreaming module
var html = fs.readFileSync('htmltest.html'); //read in the data from the html file.
const turnoff = require('./turnofflights'); //Include the "module" that allows for the lights to turn off
const turnon = require('./turnonlights'); //Include the "module" that allows for the lights to turn on
const Hs100Api = require('hs100-api'); //Include the Smart Plug's module -- I probably should have nested this in the turnofflights/onlights JS scripts.

app.use(myParser.urlencoded({extended : true})); //Tells the webserver how to interpret data from the web client (eg Chrome)

app.get('/', function (req, res) { //When the user browses to "localhost:8081/" this will serve up the html web page. Why port 8081? See the app.listen tag.
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(html);
	  res.end();
})

app.post('/', function (req, res) { //This tag gets executed when the HTML page "posts" information to the web server.
	console.log(req.body.testChickens) //Record what information was sent to the server, for testing purposes.
	  if ("on" == req.body.testChickens.substring(0,2).toLowerCase()){ //Check if the string is "on" or "off"
		  turnon.on();
	  }
	  if ("off" == req.body.testChickens.toLowerCase()){
		console.log("Entered off loop");
	   	turnoff.off();
	  }
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(html);//Load the HTML page again so that we're constantly refreshing and checking Facebook. 
	  res.end();
})

app.listen(8081, function () { // This is the first tag that's really executed. It tells the web server to accept connects to the localhost from port 8081.
  	  console.log('Example app listening on port 8081!')
})
