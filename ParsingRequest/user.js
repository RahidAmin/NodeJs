
const http = require('http');
const fs = require('fs')
// function requestListener(req, res) {
//     console.log(req)
// }


const body = [];
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // process.exit();

    if (req.url === '/') {

        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Form Page</title></head>");
        res.write("<body>");
        res.write('<form action="/product" method="POST">');
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

    } else if (req.url === '/product' && req.method === 'POST') {

        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);


        }
        );
        req.on('end', () => {
            const fullData = Buffer.concat(body).toString();
            console.log(fullData)
            const params = new URLSearchParams(fullData);
            console.log(params)


            // const bodyObject = {}
            // for (let [key, value] of params.entries()) {
            //     bodyObject[key] = value
            // }

            const bodyObject = Object.fromEntries(params)
            console.log(bodyObject)

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end("Buffer done")

        })

    }

    // res.statusCode = 302;
    // res.setHeader('Location', '/');
    // res.end();

})

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on port:${port}`);
});