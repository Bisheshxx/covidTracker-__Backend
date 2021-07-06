const mongoose = require('mongoose');

const User = mongoose.model('User',{
    "fullname":{
        type:String,
        required:true,
        default:"user"
    },

    "email":{
        type:String,
        required:true,
        unique:true
    },

    "password":{
        type:String,
        required: true
    }
});

module.exports = User