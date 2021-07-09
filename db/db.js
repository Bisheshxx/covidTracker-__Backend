const mongoose = require("mongoose");
//connecting the db in mongo atlas
mongoose.connect('mongodb+srv://admin-sakriya:khadka123@cluster0.kgbux.mongodb.net/covid',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})