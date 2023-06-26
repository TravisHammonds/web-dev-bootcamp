
const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req, res) {

    var url = "https://api.openweathermap.org/data/2.5/weather?lat=76.1784&lon=40.0467&appid=a263d35c118343315627c234b6697a0e"
    
    https.get(url, function(response) {
        console.log(response);
    });

    res.send("Server is up and running");
});



app.listen(3000, function () {
    console.log("server listening on port 3000");
});