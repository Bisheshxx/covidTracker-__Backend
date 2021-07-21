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
    
    "userType":{
        type:String,
        enum: ['Admin','Event_manager','Visitor']
    },

    "password":{
        type:String,
        required: true
    },

    "is_active":{
        required:true,
        type:Boolean,

        default:false
    }
});

module.exports = User