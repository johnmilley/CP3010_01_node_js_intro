const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // Use this method for Assignment 1

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if (err) throw err
    //             res.writeHead(200, { 'Content-Type': 'text/html' })
    //             res.end(content)
    //         })
    // }

    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'),
    //         (err, content) => {
    //             if (err) throw err
    //             res.writeHead(200, { 'Content-Type': 'text/html' })
    //             res.end(content)
    //         })
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'Jane Smith', age: 22 }
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users))
    // }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // Extension of file
    let extname = path.extname(filePath)
    // Initial content type
    let contentType = 'text/html'
    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // Read file
    console.log(filePath)
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        if (err) throw err
                        res.writeHead(200, { 'Content-Type': contentType })
                        res.end(content, 'utf8')
                    })
            } else {
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})






// The code below is used to gradually introduce how node works

// CommonJS vs ES6 imports
// const person = require('./person')
// const Person = require('./person')

// const person1 = new Person('John Doe', 23)
// const person2 = new Person('Jane Doe', 24)

// EX 1
// console.log(person1.greeting())

// EX 2
// const Logger = require('./logger')
// const fs = require('fs')
// const path = require('path')

// const logger = new Logger()

// logger.on('message', data => console.log("Called Listener", data))

// logger.log("Hello World")
// logger.log("Hello Bob")
// logger.log("Hello Jane")

// Challenge: use the fs module to save each logged message to a file\
// const log_path = path.join(__dirname, '/log.txt')

// function logToFile(text) {
//     if (fs.existsSync(log_path)) {
//         fs.appendFile(log_path, "test", err => console.log("message logged to file."))
//     } else {
//         fs.writeFile(log_path, "filecreated", err => console.log("message logged to file."))
//     }
// }

// logToFile("Hello World")
// logToFile("Hello Bob")
// logToFile("Hello Jane")