// Events
// https://nodejs.org/dist/latest-v18.x/docs/api/events.html

const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event fired!'))

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')