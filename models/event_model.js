const mongoose = require('mongoose');

const Event = mongoose.model('Event',{
    "title":{
        type:String
    },

    "description":{
        type:String
    },

    "image":{
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