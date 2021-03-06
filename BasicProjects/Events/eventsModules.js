var events = require('events');
// Create EventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {
	console.log('I hear a scream!');
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event
eventEmitter.emit('scream');