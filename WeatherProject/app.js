var log = console.log
const express = require('express')
const https = require("https")
const bodyParser = require("body-parser") 

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))



app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")

});
app.post("/", (req, res) => {
    log(req.body.cityName)
    const query = req.body.cityName;
    const apiKey = "bb4e6de196fa29acec33e4c1fbd235b8";
    const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey + "&units=" + unit;
    https.get(url, function(response){
        log("Response code: " + response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const weatherLocation = weatherData.name
            const iconId = weatherData.weather[0].icon
            const iconURL =  "http://openweathermap.org/img/wn/" + iconId +"@2x.png"
            log(weatherDescription)
             res.write(`<h1> The temperature in ${weatherLocation} is ${temp} </h1>`)
            res.write("<p> The weater is currently " + weatherDescription + " </p>");
            res.write("<img src=" + iconURL + ">")
            
            res.send();
        })
    })
});





app.listen(port, () => console.log(`Example app listening on port ${port}!`))