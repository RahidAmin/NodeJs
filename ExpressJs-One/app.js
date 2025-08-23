// const http = require('http');
const express = require('express');
const userHandler = require('./user');

const app = express();


// app.use((req, res, next) => {
//     console.log("came in first middleware: ", req.url, req.method);
//     next();
// })

app.use('/', (req, res, next) => {
    console.log("came in first middleware: ", req.url, req.method);
    next();
})


app.use('/product', (req, res, next) => {
    console.log("Came in second middleware : ", req.url);
    res.send("<p>This is second middleware</p>")
})

// const server = http.createServer(app);


const port = 3000;

app.listen(port, () => {
    console.log('server is running at port: ', port);
})