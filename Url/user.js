
const http = require('http');
const fs = require('fs')
// function requestListener(req, res) {
//     console.log(req)
// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();

    if (req.url === '/') {

        res.setHeader('Contect-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Form Page</title></head>");
        res.write("<body>");
        res.write('<form action="/submit-details" method="POST">');
        res.write('Name: <input type="text" name="name"><br>');
        res.write('Gender: <select name="gender">');
        res.write('<option>Male</option>');
        res.write('<option>Female</option>');
        res.write('<option>Other</option>');
        res.write('</select><br>');
        res.write('<button type="submit" value="submit">Submit</button>');
        res.write('</form>');
        res.write("</body>");
        res.write("</html>");
        return res.end()

    } else if (req.url === '/submit-details' && req.method === 'POST') {
        fs.writeFileSync("submitFile.pdf", "kire mama");
        res.statusCode = 302;
        res.setHeader('Location', '/')
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