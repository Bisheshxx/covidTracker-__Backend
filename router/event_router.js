const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const event = require('../models/event_model');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

//to create a new event 
router.post('/event/insert',upload.single('image'),function(req,res){

    if (req.file == undefined){
        return res.status(202).json({message: 'invalid file!!'});
    }
    const newEvent = new event({
        manager_id : req.body.manager_id,
         title : req.body.title,
         description : req.body.description,
         image : req.body.path,
         venu : req.body.venu,
         date: req.body.date
    });

    newEvent.save().then(function(result){
        res.status(200).json({message: 'new event is created', success:true});
    }).catch(function(err){
        res.status(500).json({error:err})
    })

    
      

    })

    module.exports = router;