const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const db = require('./db/db');
const path = require('path');
const registration_route = require('./router/register_router');
const event_route = require('./router/event_router');
const admin_route = require('./router/admin_router');
const password_route = require('./router/password_rest');



const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use('/images',express.static(path.join(__dirname,'/images')));
app.use(express.json());
app.use(registration_route);
app.use(event_route);
app.use(admin_route);
app.use(password_route);







app.listen(90, function(){
    console.log("The server is running");
});