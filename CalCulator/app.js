
console.log("hello")

const http = require('http');
const requestHandler1 = require('./requestHandler')



const server = http.createServer(requestHandler1)


const port = 3000;
server.listen(port, () => {
    console.log("Server is running at port: ", port)
})