const log = console.log
const express = require("express")
const bodyParser = require("body-parser")
//const request = require("request")
const https = require("https")
// var https = require('follow-redirects').https;
var fs = require('fs');


const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})
app.post('/', (req, res) => {
    log(req.body.firstName)
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email

    const data = {
        "email": email,
        "unconfirmed": true,
        "values":[
          {
                    "value": lastName,
                    "kind": "string",
                    "parameter_id": 172366
                },
                {
                    "value": firstName,
                    "kind": "string",
                    "parameter_id": 172365
                }
  ]
    };

    
    
    

    const options = {
        
  'method': 'POST',
  'hostname': 'api.mailopost.ru',
  'path': '/v1/email/lists/311567/recipients',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 15451c4f7a29ccbbec7a1fda7f740418'
  },
  'maxRedirects': 20
    }

const request = https.request(options, function (response) {


  if (response.statusCode === 201) {
      res.sendFile(__dirname + "/success.html")
    } else {
        res.sendFile(__dirname + "/failure.html")
       
  }
  
  response.on("data", function(data) {
    log(JSON.parse(data))

  });

});

var postData = JSON.stringify({
  "email": email,
  "unconfirmed": true,
  "values": [
    {
      "value": lastName,
      "kind": "string",
      "parameter_id": 172366
    },
    {
      "value": firstName,
      "kind": "string",
      "parameter_id": 172365
    }
  ]
});

const jsonData = JSON.stringify(data)

request.write(postData);
request.end();

})

app.post("/failure", (req, res) => {
    res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//API Key
// d8bb6ba6f90029c6547f5b43998ca5d1-us17

//list id
// 5c2a19ebaa