const express = require("express");
const app = express();
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function () {
    console.log("lisren from 3000");
});
const date = require(__dirname+"/date.js");
var items = [1, 2, 3];
var workitems = [4, 5, 6];

app.get('/', (req, res) => {
    // let date = new Date();
    // let options = {
    //     day: "numeric", month: "numeric",

    // };
    // var displayTime = date.toLocaleDateString("en-US", options);
    let day=date.getweekDay();




    res.render('list', { kindOfDay: day, newListItems: items });

});
app.post('/', (req, res) => {
    var item = req.body.newItem;
    let title = req.body.button;
    console.log(req.body);
    if (title === "worklist") {
        workitems.push(item);
        res.redirect('/work');
    }
    else {
        items.push(item);
        res.redirect('/');
    }

});
app.get('/work', (req, res) => {

    console.log("startwork");
    res.render('list', { kindOfDay: "worklist", newListItems: workitems });

});
app.post('/work', (req, res) => {
    var item = req.body.newItem;
    console.log(req.body);
    workitems.push(item);
    res.redirect('/work');
});

app.get('/about', (req, res) => {
    res.render('about');
});

