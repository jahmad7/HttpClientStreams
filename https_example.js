var https = require('https');

console.log("it works");

var options = {
    host: 'www.lighthouselabs.ca',
    path:'/'
};

//called by https when the request is made 
// the response argument is need to see the response of the server 
var callback = function(response) {
    console.log("in response handler callback");
    console.log("response: ", response)
}

console.log("im about to make the request");

//http request for my options and a callback to make sure it worked
https.request(options, callback).end();

console.log("I've made the request");