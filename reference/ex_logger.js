/* Example custom event emmitter */

const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg })
    }
}

module.exports = Logger

/* The code below would be placed in the file where 
    you export Logger. */

// const logger = new Logger()
// logger.on('message', data => { console.log(data) })

// logger.log("Hello")
// logger.log("World")
