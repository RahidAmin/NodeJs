const express = require('express');

const hostRouter = express.Router();


hostRouter.get("/add-home", (req, res, next) => {
    res.send(`
        <p>Register Your home</p>
        <form action="/add-home" method="POST">
        <input type=text name=home placeholder="Input Your Home Name">
        <input type="submit">
        </form>
        `)

})



hostRouter.post("/add-home", (req, res, next) => {
    res.send(`<p>Home Regitered successfully</p>
        <p>Your Home Name is:${req.body.home} </p>
        <a href="/">Go to Home </a>
        `)
})




module.exports = hostRouter;



