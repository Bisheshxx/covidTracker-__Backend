const mongoose = require('mongoose');
const {ObjectId}= require('bson');
const User = require('./registration_model');
const EventRegistration = mongoose.model("EventRegistration",{

    "userId":{
        type:ObjectId,
        ref:User
    },
   
  })

module.exports = EventRegistration;