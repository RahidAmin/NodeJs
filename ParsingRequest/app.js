const http = require('http');
const userHandler = require('./user');

const server = http.createServer(userHandler);

const port = 3000;
server.listen(port, () => {
    console.log("Server is runnig at port: ", port);
})