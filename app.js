const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());




app.listen(90, function(){
    console.log("The server is running");
});