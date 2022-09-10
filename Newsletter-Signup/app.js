const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function () {
    console.log("lisren from 3000");
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", function (req, res) {

    let fName = req.body.fName;
    let lName = req.body.lName;
    let email =  req.body.email;

    console.log(fName,lName,email);
    // res.send("the result is " + num3);
});
//api key
//bc25a4ae642d4efef453bbb1328f0196-us11 


