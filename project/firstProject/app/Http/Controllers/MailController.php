<?php

namespace App\Http\Controllers;
use app\Mail\TestMail;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Mail;
use Mail;

class MailController extends Controller
{
    public function sendMail(){
        $details = [
            "title" => 'Mail from Shoe Ecommerce company',
            'body' => 'Your registration has been done.'
        ];
        
        Mail::to("shoeecommerce81@gmail.com")->send(new TestMail($details));
        return 'email sent';
    }
}
