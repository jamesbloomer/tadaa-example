var tadaa = require('tadaa');

var example = {};


// The minimum that you need to implement is the getValue function which gets
// the value that tadaa is going to monitor.
example.getValue = function(options, callback){
    var number = Math.random() * options.multiplier;
    
    // Plugins are encouraged to log any information that may be useful
    console.log("example plugin got the number " + number);
    console.log("message from example plugin" + options.message);
    
    callback(null, number); 
};

// The function above utilises the options that are defined here
// Typically these will be configuration variables such as passwords
// and are expected to be edited per deployment or read from environment variables
example.options = {
	message: "default",
    multiplier: 100
};

// From here on the plugin implementation is optional as defaults exist for these values.

// Polling interval in milliseconds. Default 10 minutes.
example.interval = 2000;

// Logic and sounds. Default is to check for simple up and down and play "up.wav" and "down.wav"
// The example here swaps in some custom logic by using fndown
var fndown = function(currentValue, newValue) {
    return newValue < currentValue;  
};

example.logic = [{fn: tadaa.up, sound:"up.ogg"}, {fn: fndown, sound:"down.ogg"}];


// Which audio player to use. The default is aplay. Configurable per plugin 
// in case you want to use exotic file formats for the sounds.
example.player = 'ogg123';


module.exports = example;