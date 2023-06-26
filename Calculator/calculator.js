const express = require("express");   //imports
const bodyParser = require("body-parser");

const app = express(); //renames express 

app.use(bodyParser.urlencoded({extended: true})); //allows app to use bodyParser. urlencoded gets data 
//from html file. extended allows us to post the data

app.get("/", function(req, res) { //getting data from html file
    res.sendFile(__dirname + "/index.html");
    console.log("get request complete");
});

app.post("/", function(req, res) { //posting to html file
    
    var num1 = Number(req.body.num1); //Grabs number form the request body and changes type to number
    var num2 = Number(req.body.num2); 

    var result = num1 + num2; //adds the two numbers as the result

    res.send("the result is " + result); //sends the result to html file
    console.log("post request complete");
});

app.listen(3000, function () {
    console.log('listening on port 3000');
});

//------BMI CALCULATOR -----//

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = (weight * 703) / (height * height);

    res.send("Your calculated bmi is " + bmi);
})



