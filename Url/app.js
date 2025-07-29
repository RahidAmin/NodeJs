
const http = require('http');

// function requestListener(req, res) {
//     console.log(req)
// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();

    if (req.url === '/') {
        res.setHeader('Contect-Type', 'text/html');
        res.write('<html>');

        res.write("<body>Welcome to Home Page</body>");
        res.write("</html>")
        return res.end()
    } else if (req.url === '/products') {
        res.setHeader('Contect-Type', 'text/html');
        res.write('<html>');

        res.write("<body>See All Products</body>");
        res.write("</html>")
        return res.end()
    }

    res.setHeader('Contect-Type', 'text/html');
    res.write('<html>');

    res.write("<body>404 not found</body>");
    res.write("</html>")
    return res.end()


})

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on port:${port}`);
});