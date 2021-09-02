<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    function adminLogin(Request $req){
        $admin = Admin::where(['email'=>$req->email])->first();
        if(!$admin || !Hash::check($req->password,$admin->password)){
            return "wrong credential!!";
        }else{
                $req->session()->put("admin",$admin);
                return redirect('/product');

        }
    }

    function adminRegister(Request $req){
        $admin = new Admin;
        $admin->name = $req->name;
        $admin->email = $req->email;
        $admin->password = Hash::make($req->password);
        $admin->save();
        return redirect('/adminlogin');
    }
}
