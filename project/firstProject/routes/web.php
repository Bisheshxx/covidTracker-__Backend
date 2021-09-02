<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return view('login');

})->name('login');


Route::get('/adminlogin', function () {
    return view('admin');
});
Route::get('/logout', function () {
    // to end the login session
    Session::forget('user');
    return redirect('/login');
});

Route::post('/login',[UserController::class,'login']);

Route::get("/",[ProductController::class,'index']);

Route::get('/product',[ProductController::class,'index']);

Route::get('/detail/{id}',[ProductController::class,'detail']);

Route::view('/register','register');
Route::post('/register',[UserController::class,'register']);

Route::view('/adminregister','adminRegister');
Route::post('/adminregister',[AdminController::class,'adminRegister']);

Route::post('/add_to_cart',[ProductController::class,'addToCart']);
Route::get('/cartlist',[ProductController::class,'cartList']);
Route::get('/removecart/{id}',[ProductController::class,'removeCart']);

Route::get('/sendemail',[MailController::class,'sendMail']);

Route::post('/adminlogin',[AdminController::class,'adminLogin']);


