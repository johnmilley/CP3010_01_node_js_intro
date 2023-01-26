/* Server that uses the fs.promises to access files */

const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs').promises // https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-the-fs-module-in-node-js

const public = path.join(__dirname, 'public') // creates path to public directory

const server = http.createServer((req, res) => {

    /* Code that handles http requests. 
            Responses depend on the url requested. */
    /* Note: 
            Use this routing method for Assignment 1. We'll learn
            alternative (and easier) ways of doing this using
            the Express module later in the course. */
    
    if (req.url === '/') {
        fs.readFile(path.join(public, 'index.html'))
            .then(contents => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(contents)
                res.end()
            })
            .catch(err => {
                res.writeHead(500)
                res.end(err)
            })
    } else if (req.url === '/about') {
        fs.readFile(path.join(public, 'about.html'))
            .then(contents => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(contents)
                res.end()
            })
            .catch(err => {
                res.writeHead(500)
                res.end(err)
            })
    } else {
        fs.readFile(path.join(public, '404.html'))
            .then(contents => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(contents)
                res.end()
            })
            .catch(err => {
                res.writeHead(500)
                res.end(err)
            })
    }
})


/* The process --> https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7 */
const PORT = process.env.PORT || 4444

/* Start the server https://nodejs.org/api/http.html#serverlisten */
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})