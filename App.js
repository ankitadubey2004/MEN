//Node.js thing
// const http = require('http') 

// const server = http.createServer((req,res) =>{
//     if(req.url == "/about"){
//         res.end("The about page")
//     }
//     if(req.url == "/profile"){
//         res.end("The profile page")
//     }
//     if(req.url =='/contact') {
//         res.end('Contact us at: contact@xyz.com')
//     }


// })

// server.listen(3000, () => console.log("Server running on port 3000"))

//Express.js
const express = require('express') 
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.send('Hello World')
}) 
app.get('/profile', (req,res) => {
    res.render('index')
}) 

app.listen(3000)

