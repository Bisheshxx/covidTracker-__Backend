const mongoose = require("mongoose");
//connecting the db in mongo atlas
// mongoose.connect('mongodb+srv://admin-sakriya:khadka123@cluster0.kgbux.mongodb.net/covid',{
    //connecting in local host
mongoose.connect('mongodb://127.0.0.1:27017/covid',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})