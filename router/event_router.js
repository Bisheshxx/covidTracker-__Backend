const express = require('express');
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
         eimage : req.file.path,
         venu : req.body.venu,
         date: req.body.date
    });

    newEvent.save().then(function(result){
        res.status(200).json({message: 'new event is created', success:true});
    }).catch(function(err){
        res.status(500).json({error:err})
    })

    })

//fetching the event user as an admin

    router.get('/event/showall', function(req,res){
        event.find({})
        .then(function(data){
            return res.status(200).json({success:true,'data':data})
        })
        .catch(function(e){
            return res.status(500).json({message:err, success:false})
        })
    })

    module.exports = router;

//deleting the event as an admin

    router.delete('/event/delete/:_id',auth.verifyUser,auth.verifyAdmin, function(req,res){
        const id = req.params.id;
        event.deleteOne({_id:id})
        .then(function(result){
             res.status(200).json({success:true, message:'Deleted!!'});
        })
        .catch(function(e){
            res.status(500).json({error:e});
        })
    });

//tracking number of people who click the btn

    router.post('/event_toggle',auth.verifyUser,function(req,res){
        const id = req.body.event_id;
        const decision = req.body.decision;
        const events= event.findOne({_id:id})
        .then(function(data){
            let user_decision = {}
           
            if(decision=='going' && !data.going.includes(req.user._id.toString())){
                user_decision['going'] = req.user._id ;
            }
            else if(decision=='interested' && !data.interested.includes(req.user._id.toString())){
                user_decision['interested'] = req.user._id ;
            }
            event.updateOne({_id:data._id},{$push:user_decision})
            .then(function(result){
                res.status(200).json({success:true, message:'Responded'});
           })
           .catch(function(e){
               res.status(500).json({error:e});
           })
        })
        

    })

    router.get('/event/showall', function(req,res){
        event.find({})
        .then(function(data){
            return res.status(200).json({success:true, 'data':data});
        })
        .catch(function(e){
            return res.status(500).json({success:false, message:err});
        })
    });

//updating the event as an admin

    router.put('/event/update/',upload.single('image'),auth.verifyUser, auth.verifyAdmin, function(req,res){
        if(req.file == undefined){
            return res.status(202).json({success:false, message:'invalid file!!'});
        }
        const title = req.body.title;
        const description = req.body.description;
        const image = req.file.path;
        const venu = req.body.venu;
        const date = req.body.date;
        const id = req.body._id; 

        event.updateOne({_id:id},{
            title:title,
            description: description,
            image: image,
            venu: venu,
            date: date
        })
        .then(function(result){
            res.status(200).json({success:true, message:'Updated!!'});
        })
        .catch(function(e){
            res.status(500).json({error:e});
        })

    });

    module.exports = router;