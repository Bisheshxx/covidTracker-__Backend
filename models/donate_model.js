const mongoose = require('mongoose');
const Event= require('./event_model');
const {ObjectId}= require('bson');
const Donate = mongoose.model('Donate',{
    "event_id":{
        type:ObjectId,
        ref:Event

    },
    "email":{
        type:String,
        required:true,
        
    },

    "donation_amount":{
        type:Number
    },

    "Remarks":{
        type:String
    }
})

module.exports = Donate;