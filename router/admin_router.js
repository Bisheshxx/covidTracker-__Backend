const express = require('express');
const User = require('../models/registration_model');
const router = express.Router();
const auth = require('../middleware/auth');


//fetcching the active users 

router.post('/user/showall', function(req,res){
    
    User.find({is_active:true})
    .then(function(data){
        return res.status(200).json({success:true,'data':data});
    })
    .catch(function(e){
        return res.status(500).json({message: err, success:false});
    })
})

//fetching all the users 

router.get('/user/showall', function(req,res){
    User.find({})
    .then(function(data){
        return res.status(200).json({success:true, 'data':data});
    })
    .catch(function(e){
        return res.status(500).json({success:false, message:err});
    })
});

//fetching user individually 

router.get('/user/show/:_id', function(req,res){
    const id = req.params._id;
    User.findOne({_id:id})
    .then(function(data){
        return res.status(200).json({success:true, 'data':data});
    })
    .catch(function(e){
        return res.status(500).json({success:false, message:err});
    })
});

//deleting the user 

router.delete('/user/delete/:_id',auth.verifyUser, auth.verifyAdmin, function(req,res){
    const id = req.params.id;
    User.deleteOne({_id:id})
    .then(function(result){
        res.status(200).json({success:true, message:'Deleted!!'});
   })
   .catch(function(e){
       res.status(500).json({error:e});
   })
})

//updating the user 

router.put('/user/update/',auth.verifyUser,auth.verifyAdmin, function(req,res){
    const fullname = req.body.fullname;
    const email = req.body.email;
    const userType = req.body.userType;
    const id = req.body._id; 

    User.updateOne({_id: id},{
        fullname:fullname,
        email: email,
        userType: userType,

    })
    .then(function(result){
        res.status(200).json({success:true, message:'Updated!!'});
    })
    .catch(function(e){
        res.status(500).json({error:e});
    })
})

module.exports = router;




