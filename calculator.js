const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function() {
    console.log("Server Started on port 3000..")
})

app.post("/", function(req, res){
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3 = Number(req.body.num3);
    var result = num1 + num2 + num3;

    res.send("Result of calculation is "+result);
})


app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
})