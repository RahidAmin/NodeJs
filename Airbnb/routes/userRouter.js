const express = require('express');
const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
    res.send(`<p>This is Home</p>
        <a href="/add-home">Add Home</a>
        
        
        `);
})

module.exports = userRouter;
