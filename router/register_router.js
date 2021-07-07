const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const {check , validationResult}= require('express-validator');
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

module.exports = router;
