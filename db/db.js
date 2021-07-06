const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/covid',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})