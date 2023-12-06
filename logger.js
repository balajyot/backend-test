const EventEmitter = require('events');
const uuid = require('uuid'); // we installed that login

class Logger extends EventEmitter {
  log(msg) { // method here
    // Call event , A Version 4 UUID is a universally unique identifier that is generated using random numbers.
    this.emit('message', { id: uuid.v4(), msg }); // there are different version ov V$
    // thsi.emit is from EventEmitter
  }
}

// module.exports = Logger; we can export this and use in index.js

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('John Doe');
logger.log('Brad Pit');
logger.log('Tom Cruise');