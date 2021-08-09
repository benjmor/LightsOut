var sock = require('net');
var http = require('http');
var url = require('url');
var hs100api = require('hs100-api');

const PORT = 8083;

var server = http.createServer(onRequest);
server.listen(PORT);
console.log("The HS-100 controller has started");

function onRequest(request, response){
  //var pathname = url.parse(request.url).pathname;
  var command = request.headers["x-hs100-command"];
  var deviceIP = request.headers["x-hs100-ip"];
  var hs100 = new hs100api.Client().getPlug({host:deviceIP});
  var msg = '';
  var date = new Date();
  switch(command) {
    case "on":
      msg = date + ': ON command sent to ' + deviceIP;
      console.log(msg);
      hs100.setPowerState(true);
      response.end(msg);
      break;
    case "off":
      msg = date + ': OFF commmand sent to  ' + deviceIP;
      console.log(msg);
      hs100.setPowerState(false);
      response.end(msg);
      break;
    case "status":
      console.log("status");
      console.log(deviceIP + ":" + command);
      var p = Promise.resolve(hs100.getPowerState());
      p.then(function(data){
         var state = ((data) ? "on" : "off");
         msg = "you checked " + deviceIP +  " status:" + state;
         response.setHeader("x-hs100-status", state);
         response.end(msg);
      });
      break;
    default:
      response.end('hs100');
  }
}
