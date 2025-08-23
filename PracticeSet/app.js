
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("first dummy middleware: ", req.url, req.method);
    next();
})
app.use((req, res, next) => {
    console.log("second dummy middleware: ", req.url, req.method);
    next();
})

// app.use((req, res, next) => {
//     console.log("third dummy Response middleware: ", req.url, req.body);
//     res.send("<p>This is response middleware(Third)</p>")
// })

app.get("/", (req, res, next) => {
    console.log("Handling / for: ", req.method);
    res.send("<p>This is home page </p>");
})

app.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for: ", req.method);
    res.send(`<p>This is contact us page</p>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Input Your name here: " />
        <input type="text" name="email" placeholder="Input Your Email here: " />
        <input type="Submit"/>
        </form>
        
        
        `)
})

app.post("/contact-us", (req, res, next) => {
    console.log("Handling contact us for: ", req.method);
    res.send("<p>We will contact you soon</p>");
})



const port = 3000;
app.listen(port, () => {
    console.log("Server is running at port: ", port);
})