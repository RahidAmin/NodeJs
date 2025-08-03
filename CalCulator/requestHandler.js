
const summ = require('./sum')

const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', "text/html");


        res.write(`<html><body>  
            
            
            <p>hello from export module</p> 
            <a href="/calculator"> calculator</a>
            </body></html>`)


        return res.end();
    } else if (req.url === '/calculator') {
        res.setHeader('Content-Type', "text/html");


        res.write(`<html><body>  
            
            
            <p>Calculator page</p> 
            <form method="POST" action="/calculate-result">
                <input type="text" placeholder="First num:" name="first"></input>
    <input type="text" placeholder="Second num:" name="second"></input>
    <input type="submit" value="sum"></input>
    </form>
           </br> <a href="/">Home</a>
            </body></html>`)
        return res.end();

    } else if (req.url === '/calculate-result' && req.method === "POST") {
        return summ(req, res)


    }

    res.setHeader('Content-Type', "text/html");


    res.write(`<html><body>  
            
            
            <p>404 page does not found</p> 
            <a href="/">go to home</a>
            </body></html>`)

    return res.end()

}

module.exports = requestHandler;