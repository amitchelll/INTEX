const express = require("express");

let app = express();

app.get("/",( req, res) => res.send("This i the server running"))

app.listen(3000, () => console.log("im watching youo"));

