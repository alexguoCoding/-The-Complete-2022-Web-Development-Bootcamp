const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/fruitDB');


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);
Fruit.remove(function (err) {
    console.log("delete success");
});
const apple = new Fruit({
    name: "apple",
    rating: 7,
    review: "Pretty soild as a fruit"
})

const orange = new Fruit({
    name: "orange",
    rating: 4,
    review: "Pretty soild as a fruit"
})
const bnana = new Fruit({
    name: "bnana",
    rating: 5,
    review: "Pretty soild as a fruit"
})

Fruit.insertMany([apple, orange, bnana]).then(function () {
    console.log("Data inserted")  // Success
}).catch(function (error) {
    console.log(error)      // Failure
});
Fruit.find({}, (err, fruits) => {
    if (err) {console.log(err);} 
    else{
        // mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }


});