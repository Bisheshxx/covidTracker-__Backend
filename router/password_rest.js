const  {sendMailMessage} = require('../forget_pass/mail');
const router = express.Router();
const saltRounds = 10;
const express = require("express");
const bcrypt = require("bcrypt");
const User = require('../models/registration_model');

//password rest

let content = {
    "heading":"Password Reset Confirmation Code",
    "greeting":`${getTimeValue()},`,
    "code":pin,
    "message":"Your password reset confirmation code is",
    "message2":"This is just a confirmation code. Not your real password.",
    "task" : "Password Reset"    
}
sendMailMessage("Password Reset",email,content);

//api for password reset

router.post('/resetPassword',(req,res)=>{
    let pid = req.body.pid;
    let password = req.body.password;
 
       bcrypt.hash(password,saltRounds,(err,hash)=>{
            User.updateOne({"_id":pid},{"password":password}).then((result)=>{
                return res.status(200).json({"success":true,"message":"Login with your new Password!!"});
                }).catch((err)=>{
                    return res.status(404).json({"success":false,"message":err});
                    })
                })

            });
      
               
    
