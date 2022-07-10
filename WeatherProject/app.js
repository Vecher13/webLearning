const express = require('express')
const https = require("https")

const app = express()
const port = 3000



app.get('/', function(req, res) {
const url = "https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=bb4e6de196fa29acec33e4c1fbd235b8&units=metric&lang=ru"
    https.get(url, function(response){
        console.log(response);
    })

    res.send("This is working")




});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))