
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("connection")
})

app.listen(process.env.PORT || 3200)
module.exports = app

