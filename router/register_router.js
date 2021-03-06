const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const {check , validationResult} = require('express-validator');
const User = require('../models/registration_model');
const router = express.Router();
const saltRounds = 10;

//user registration 
router.post('/insert/user', 
[
    check('fullname',"Fullname is required").not().isEmpty(),
    check('email','Email is invalid!!').isEmail()
],
function(req,res){
    const error = validationResult(req);

    if(error.isEmpty()){
        bcrypt.hash(req.body.password, saltRounds, function(err, hash){
            const newUser = new User({
               fullname : req.body.fullname,
               email : req.body.email,
               userType: req.body.userType,
               password: hash
            });

            newUser.save().then(function(result){
               res.status(201).json({message:"user is created", success:'true'})
            }).catch(function(err){
                res.status(500).json({error:err})
            })

        })
     } else {
         res.status(400).json(error.array())
     }
})

//user_login
router.post('/account/login',function(req,res){
    const email = req.body.email
    const password = req.body.password
    User.findOne({email:email}).then(function(userData){
        if(userData === null){
            return res.status(202).json({success:false, message:'Invalid credential!!'});
        } 
        bcrypt.compare(password, userData.password, function(err,result){
            if(result === false){
                return res.status(202).json({success:false, message:'Invalid credentials!!'})
            }

            User.updateOne({email:email},{is_active:true}).then(function(){
                
            }).catch(function(e){
                return res.status(500).json({success:false, message:err});
            })
    
            const token = jwt.sign({userId:userData._id, username:userData.username},'secretKey')
            console.log(token)
            console.log("successfully logged in")
            res.status(200).json({success:true, message:'Auth success', data:userData, token:token})
    
        })
    })
    .catch(function(err){
    
        res.status(404).json({error:err});
})
    
   
})






module.exports = router;
