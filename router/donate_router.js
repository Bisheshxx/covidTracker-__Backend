const express = require('express');
const router = express.Router();
const donate = require('../models/donate_model');
const  {sendMailMessage} = require('../forget_pass/mail');

//donating the money

router.post('/donate/amount',function(req,res){

    const newDonation = new donate({
        email : req.body.email,
        donation_amount: req.body.donation_amount,
        Remarks: req.body.Remarks,
        event_id:req.body.event_id
});
newDonation.save().then(function(result){
    let content = {
        "heading":"Password Reset Confirmation ",
        "greeting":"Dear sir/madam",
        "message":"Your password reset confirmation code is",
        "message2":"This is just a confirmation code. Not your real password.",
        "task" : "Donation"   //main trigger point 
    }
    sendMailMessage("Donation",req.body.email,content);
    res.status(201).json({message:"Donation successfull", success:'true'})
 }).catch(function(err){
     res.status(500).json({error:err})
 })
})

//getting total number of donation done

router.get('/donate/amount',function(req,res){

    donate.find({})
    .then(function(data){
        let totalAmount=0;
        for (var i of data ){
            totalAmount += i.donation_amount;
        }
        return res.status(200).json({success:true, 'data': data, totalAmount:totalAmount})
    })
    .catch(function(e){
        return res.status(500).json({success:fail, message:err})
    })
})





module.exports = router;