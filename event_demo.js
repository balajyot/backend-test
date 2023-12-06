/*
If you worked with JavaScript in the browser, you know how much of the interaction of 
the user is handled through events: 
mouse clicks, keyboard button presses,
 reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build 
a similar system using the events module.

This module, in particular, offers the EventEmitter class,
 which we'll use to handle our events.

*/
const EventEmitter = require('events');

// Create an emitter class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Some event happened!'));

// () => console.log('Event Fired!') this is a callback

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

// WE can create a more practical example using logger