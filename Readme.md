Wow, I really documented this poorly the first time around...

Let's try this again.

Install Node.js (https://nodejs.org/en/) and all required dependencies (including chocolatey if on Windows).

#QUICK Guide
##cd to the LightsOut directory
cd "C:\users\redbe\Desktop\gitHubs\LightsOut\Facebook LightsOut"
##Ensure that you have all the node modules and IOT device API modules you need.
##Run node webserver.js
&("C:\Program Files\nodejs\node.exe") .\webserver.js
##it should start listening on port 8081
###Example app listening on port 8081!

#Code flow - 
## Webserver starts
## User starts browser running the htmltest.html file to act as client for webserver
## Browser queries FB API of the post in question (hardcoded) and pulls the text of the latest comment
## Browser posts the contents of the text to the webserver
## Web server posts to IOT device API to turn it on/off
## HTML page refreshes itself every three seconds to continuously grab latest comments

#Current roadblock:
## Facebook's logon API wants ONLY HTTPS pages to use their logon stuff. Locally-run HTML is not acceptable. Need to find a workaround.