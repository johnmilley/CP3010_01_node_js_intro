const http = require('http')

// Create server object
http.createServer((req, res) => {
    console.log(req.url)
    // Write reponse
    res.write('Hello World')
    res.end()
}).listen(5000, () => console.log('Server Runnning on port 5000...'))