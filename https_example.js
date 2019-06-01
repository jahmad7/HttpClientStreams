var https = require('https');

console.log("it works");

var options = {
    host: 'www.example.org',
    path:'/'
};

//called by https when the request is made 
var callback = function() {
    console.log("in response handler callback");
}

console.log("im about to make the request");

//http request for my options and a callback to make sure it worked
https.request(options, callback).end();

console.log("I've made the request");