const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const db = require('./db/db');
const registration_route = require('./router/register_router');


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(registration_route);





app.listen(90, function(){
    console.log("The server is running");
});