
const summation = (req, res) => {
    console.log("In sum request handler: ", req.url)

    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    }
    )

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result)

        res.setHeader('Content-Type', "text/html");


        res.write(`<html><body>  
            
            
            <p>Your sum is:${result}</p> 
            
            </body></html>`)

        return res.end()

    })
}

module.exports = summation;