// Basic Nodejs server using core modules (http, path, fs)

const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')

const public = path.join(__dirname, 'public')

const server = http.createServer((req, res) => {

    /* Code that handles http requests. 
            Responses depend on the url requested. */
    /* Note: 
            Use this method for Assignment 1 */

    if (req.url === '/') {
        fs.readFile(path.join(public, 'index.html'),
            (err, content) => {
                if (err) throw err
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(content)
            })
    } else if (req.url === '/about') {
        fs.readFile(path.join(public, 'about.html'),
            (err, content) => {
                if (err) throw err
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(content)
            })
    } else if (req.url === '/api/users') { // serving JSON
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'Jane Smith', age: 22 }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    } else {    // serve "404 - Not Found" html
        fs.readFile(path.join(public, '404.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(404, {'Content-Type': 'text/html' })
                res.end(content)
            })
    }
})

/* The process --> https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7 */
const PORT = process.env.PORT || 4444

/* Start the server https://nodejs.org/api/http.html#serverlisten */
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})