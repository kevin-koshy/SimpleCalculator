const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function() {
    console.log("Server Started on port 3000..")
})

app.post("/", function(req, res){
    console.log(req.body);
    res.send("Thanks for posting.");
})


app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
})