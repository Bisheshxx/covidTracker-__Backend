<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Product;
use App\models\Cart;
use Illuminate\Support\Facades\DB;
use Session;

class ProductController extends Controller
{
    //
    function index(){
        $data = Product::all();
        return view('product',['product'=>$data]);
    }

    function detail($id){
        $data= Product::find($id);
        return view('detail',['product'=>$data]);
    }

    function addToCart(Request $req){
        // $req->session()->has('user') ?  'hello' : redirect('/login');
        if($req->session()->has('user')){
           $cart = new Cart;
           $cart->user_id= $req->session()->get('user')['id'];
           $cart->product_id=$req->product_id;
           $cart->save();
           return redirect('/product');
        }else{
            return redirect('/login');
        }
    }

  static function cartTotal(){

        $userId = Session::get('user')['id'];
        return Cart::where('user_id',$userId)->count();
    }

    function cartList(){
        $userId = Session::get('user')['id'];
        $products= DB::table('cart')
        ->join('products','cart.product_id','=','products.id')
        ->where('cart.user_id',$userId)
        // ->select('products.*')
        ->select('products.*','cart.id as cart_id')
        ->get();

        return view('cartlist',['products'=>$products]);
    }

    function removeCart($id){
        Cart::destroy($id);
        return redirect('/cartlist');
    }
}
