const fs = require('fs').promises
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created')
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World!", err => {
//     if (err) throw err
//     console.log('File written.')

//     // append to file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//         "I love Node.js!",
//         err => {
//             if (err) throw err
//             console.log('File appended.')
//         })
// })

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// // Rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
//     if (err) throw err;
//     console.log("File renamed.");
// })


/* Using fs.promises and async/await -- newer, modern way  */

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath);
        console.log(data.toString())
        return data.toString()
    } catch (error) {
        console.log(`${error.message}`)
    }
}

const index = path.join('..', '/public', 'index.html')
readFile(index)