const http = require('http')

// Create server object
const server = http.createServer((req, res) => {
    console.log(`${req.url}`) // access to request object
    // Write reponse
    res.statusCode
    res.write('Hello World')
    res.end()
})

// use the port assigned as an environment variable (production) or 4444 (development)
const PORT = process.env.PORT || 4444

server.listen(PORT, () => console.log(`Server Runnning on port ${PORT}...`))