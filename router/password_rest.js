const  {sendMailMessage} = require('../forget_pass/mail');

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
