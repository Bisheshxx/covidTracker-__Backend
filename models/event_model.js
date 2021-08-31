const mongoose = require('mongoose');
const {ObjectId}= require('bson');
const User = require('./registration_model');
const Event = mongoose.model('Event',{
    "manager_id":{
        type:ObjectId,
        ref:User
    },

    "interested":[{
        type:ObjectId
    }],

    "going":[{
        type:ObjectId
    }],


    "title":{
        type:String
    },

    "description":{
        type:String
    },

    "eimage":{
        type:String
    },

    "venue":{
        type:String
    },

    "date":{
        type:String
    }

    
});

module.exports = Event;