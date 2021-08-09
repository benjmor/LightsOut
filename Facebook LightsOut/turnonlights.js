exports.on = function(){
	const Hs100Api = require('hs100-api');

const client = new Hs100Api.Client();
//const plug = client.getPlug({host: '50:C7:BF:1D:18:35'});
//plug.getInfo().then(console.log);
//plug.setPowerState(true);

// Look for plugs, log to console, and turn them on
client.startDiscovery().on('plug-new', (plug) => {
  //.getInfo().then(console.log);
  //plug.setPowerState(true);
  //if (false==plug.getPowerState()) process.exit();
  setTimeout(function(){plug.setPowerState(true);}, 20);
  setTimeout(function(){client.stopDiscovery();}, 2000);
});
}
