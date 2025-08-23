const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
// const bodyParser = require("body-parser");

app.use((req, res, next) => {
    // res.send("<p>This is middleware</p>");
    console.log(req.url, " : ", req.method);
    next();
})

// app.use(bodyParser.urlencoded());

app.use(express.urlencoded());


app.use(userRouter)
// app.get("/", (req, res, next) => {
//     res.send(`<p>This is Home</p>
//         <a href="/add-home">Add Home</a>


//         `);
// })

app.use(hostRouter);



// app.get("/add-home", (req, res, next) => {
//     res.send(`
//         <p>Register Your home</p>
//         <form action="/add-home" method="POST">
//         <input type=text name=home placeholder="Input Your Home Name">
//         <input type="submit">
//         </form>
//         `)

// })



// app.post("/add-home", (req, res, next) => {
//     res.send(`<p>Home Regitered successfully</p>
//         <p>Your Home Name is:${req.body.home} </p>
//         <a href="/">Go to Home </a>
//         `)
// })



const port = 3000;
app.listen(port, () => {
    console.log("Server is running at port: ", port);
})