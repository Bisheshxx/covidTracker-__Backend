const mongoose = require('mongoose');
const {ObjectId}= require('bson');
const User = require('./registration_model');
const Event = require('./event_model');
const EventRegistration = mongoose.model("EventRegistration",{
    "userId":{
        type:ObjectId,
        ref:User
    },
    "eventId":{
        type:ObjectId,
        ref:Event
    },
    "response":{
        type:Boolean
    }
    
})

module.exports = EventRegistration;