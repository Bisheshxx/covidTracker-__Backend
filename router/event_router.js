const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const event = require('../models/event_model');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/event/insert',upload.single('image'),function(req,res){

    if (req.file == undefined){
        return res.status(400).json({message: 'invalid file!!'});
    }
    const newEvent = new event({
         title : req.body.title,
         description : req.body.description,
         image : req.body.path,
         venu : req.body.venu,
         date: req.body.date
    });

    newEvent.save().then(function(result){
        res.status(201).json({message: 'new event is created', success:true});
    }).catch(function(err){
        res.status(500).json({error:err})
    })

    
      

    })

    module.exports = router;