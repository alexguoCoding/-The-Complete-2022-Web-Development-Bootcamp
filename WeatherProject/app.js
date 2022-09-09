const express = require('express')
const app = express()
const port = 3000
const https=require('https')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log(`homepage`);
    // const url="https://api.openweathermap.org/data/2.5/weather?q=Edmonton&appid=89e423f7fadf2d64ef7d43aeea2e04cf&units=metric";
    // https.get(url,function(response){
      
    //     response.on("data",function(data){
    //         const WheatherData= JSON.parse(data);
    //         const describe=WheatherData.weather[0].description;
    //         const temp=WheatherData.main.temp;
    //         const weatherIcon=WheatherData.weather[0].icon;
    //         const pic="http://openweathermap.org/img/wn/" +weatherIcon+"@2x.png";
    //         res.write("<h1>describe: "+describe+"</h1>>");
    //         res.write("<img src="+pic+">");

           
    //         res.write("<p>the temperature in edmonton is "+ temp+"degrees Celcius<p/>");
    //         res.send();
          
    //        console.log(describe);
    //     })

    // })
   
    res.sendFile(__dirname + "/index.html");
 
});
app.post("/", function (req, res) {
   let cityName = req.body.cityName;
   const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=89e423f7fadf2d64ef7d43aeea2e04cf&units=metric";


   // const url="https://api.openweathermap.org/data/2.5/weather?q=Edmonton&appid=89e423f7fadf2d64ef7d43aeea2e04cf&units=metric";
    https.get(url,function(response){
      
        response.on("data",function(data){
            const WheatherData= JSON.parse(data);
           const describe=WheatherData.weather[0].description;
            const temp=WheatherData.main.temp;
            const weatherIcon=WheatherData.weather[0].icon;
            const pic="http://openweathermap.org/img/wn/" +weatherIcon+"@2x.png";
            res.write("<h1>describe: "+describe+"</h1>");
           res.write("<img src="+pic+">");

           
            res.write("<p>the temperature in"+cityName+"  is "+ temp+"degrees Celcius<p/>");
            res.send();
          
          // console.log(describe);
        })

    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})