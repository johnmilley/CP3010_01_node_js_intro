const os = require('os')

// Platform
console.log(os.platform())

// CPU architecture
console.log(os.arch())

// CPU Core Info
console.log(os.cpus())

// Free memory (in bytes)
console.log(os.freemem())

// Total memory (in bytes)
console.log(os.totalmem())

// Home dir
console.log(os.homedir())

// Uptime (in seconds)
console.log(os.uptime())
