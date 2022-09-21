const express = require("express");
const app = express();
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');

const mongoose = require("mongoose");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://songkunguo:123@cluster0.saxkiej.mongodb.net/todolistDB');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.listen(port, function () {
    console.log("lisren success");
});


const date = require(__dirname + "/date.js");
// var items = [1, 2, 3];
var workitems = [4, 5, 6];
const itemsSchema = new mongoose.Schema({
    name: String

});
const item = mongoose.model('item', itemsSchema);
const item1 = new item({
    name: "welcome",

})
const item2 = new item({
    name: "hit +",

})
const item3 = new item({
    name: "hit this to delete",

})
// item.deleteMany({ }).then(function(){
//     console.log("Data deleted"); // Success
// }).catch(function(error){
//     console.log(error); // Failure
// });
const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);


app.get('/', (req, res) => {
    // let date = new Date();
    // let options = {
    //     day: "numeric", month: "numeric",

    // };
    // var displayTime = date.toLocaleDateString("en-US", options);
    let day = date.getweekDay();
    item.find({}, (err, items) => {
        if (items.length === 0) {
            item.insertMany(defaultItems).then(function () {
                console.log("Data inserted")  // Success
            }).catch(function (error) {
                console.log(error)      // Failure
            });
            res.redirect('/');
        }

        else {
            // mongoose.connection.close();
            res.render('list', { kindOfDay: day, newListItems: items });
        }


    });




    // res.render('list', { kindOfDay: day, newListItems: items });

});
app.post('/', (req, res) => {
    console.log(req.body);
    
    let tempItem = new item({
        name: req.body.newItem

    })
    if (req.body.button === 'Tuesday') {


        console.log( "good");

        tempItem.save();
        res.redirect('/');

    }
    else {

        List.findOne({ name: req.body.button }, function (err, findlist) {
            findlist.items.push(tempItem);
            findlist.save();

        });
        res.redirect('/'+req.body.button);
    }





   

    // let title = req.body.button;
    // console.log(req.body);
    // if (title === "worklist") {
    //     workitems.push(item);
    //     res.redirect('/work');
    // }
    // else {
    //     items.push(item);
    //     res.redirect('/');
    // }

});
app.post('/delete', (req, res) => {
    let listNmae=req.body.listName
    const id = req.body.checkbox;
    if(listNmae==='Tuesday'){
        item.find({ _id: id }).remove().exec();
        res.redirect('/');
    }
    else{
        List.findOneAndUpdate({name: listNmae}, {$pull: {items: {_id: id}}}, function(err, foundList){
            if (!err){
              res.redirect("/" + listNmae);
            }
          });
    }
    console.log(req.body);

});
//var i=0;
app.get('/:id', function (req, res) {
    const Yourname = req.params.id;
    console.log("name  " + Yourname);

    List.findOne({ name: Yourname }, function (err, findlist) {
        if (!err) {
            if (!findlist) {
                // console.log("dont exist");
                let templist = new List({
                    name: Yourname,
                    items: defaultItems
                })
                templist.save();
                //i++;
                //console.log("times "+i);
                //  console.log("add")
                res.redirect('/' + Yourname);
                //res.render('list', { kindOfDay: findlist.name, newListItems: findlist.items });
            }
            else {
                // console.log("already exist");
                res.render('list', { kindOfDay: findlist.name, newListItems: findlist.items });

            }


        }

    });






});
// app.get('/work', (req, res) => {

//     console.log("startwork");
//     res.render('list', { kindOfDay: "worklist", newListItems: workitems });

// });

// app.post('/work', (req, res) => {
//     var item = req.body.newItem;
//     console.log(req.body);
//     workitems.push(item);
//     res.redirect('/work');
// });

app.get('/about', (req, res) => {
    res.render('about');
});

