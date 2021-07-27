const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
// const { getMaxListeners } = require('../models/registration_model');

const isEqualHelperHandlerbar = function(a, b, opts) {
    if (a == b) {
        return opts.fn(this) 
    } else { 
        return opts.inverse(this) 
    } 
}


const emailTransporter = ()=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port:587,
        secure:true,
        auth:{
            user:'covidnepal81@gmail.com',
            pass:'Covid321@' 
        }
    });
    const handleBarOptions = {
        viewEngine:{
            extName:'.hbs',
            partialsDir:'views',
            layoutsDir:'views',
            defaultLayout:'',
            helpers:{
                if_equal:isEqualHelperHandlerbar
            }
            
        },
        viewPath:'views',
        extName:'.hbs'
    }
    transporter.use('compile',hbs(handleBarOptions));
    return transporter;
}

const sendMessage = (messageContent)=>{
   
    emailTransporter().sendMail(messageContent,(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Message Sent!!");
        }
    })
    
}

const sendMailMessage = (subject,email,content) =>{
  
    let emailMessage = {
        "from":'covidnepal81@gmail.com',
        "to":email,
        "subject":subject,
        "template":'templete',
        "context":content,
     
        
    } ;
    sendMessage(emailMessage);
    
}

module.exports = {sendMailMessage};