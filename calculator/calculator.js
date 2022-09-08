const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.listen(3000, function () {
    console.log("lisren from 3000");

});
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let num3 = num2 + num1;

    console.log(num1);
    res.send("the result is " + num3);
});
app.get('/BMIcalculator', function (req, res) {
    res.sendFile(__dirname + "/BMIcalculator.html");
});
app.post("/BMIcalculator", function (req, res) {
    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);
    console.log(height);
    let bmi = height /(weight*weight);

    console.log(bmi);
    res.send("the bmi is: " + bmi);
});