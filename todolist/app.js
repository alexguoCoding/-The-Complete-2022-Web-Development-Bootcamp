const express = require("express");
const app = express();
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function () {
    console.log("lisren from 3000");
});


app.get('/',  (req, res) =>{
    let date = new Date();  
    let options = {  
         day: "numeric", month: "numeric",  
       
    };  
    var displayTime=date.toLocaleDateString("en-US", options);
    
   


    res.render('list', { kindOfDay: displayTime });

});
