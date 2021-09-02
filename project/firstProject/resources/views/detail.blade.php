
@extends('layout/master')

@section('content')
<div class="container">
    <div class="row" style="display: flex; margin-left:2in">
        <div class="col" style="width:4in">
        <img class="detail-img" src="{{$product['image']}}" alt="">
        </div>
        <div class="col-sm-6">
            <a href="/product">Go Back</a>
        <h2>{{$product['name']}}</h2>
        <h3>Price : {{$product['price']}}</h3>
        <h4>Details: {{$product['description']}}</h4>
        <h4>category: {{$product['catagory']}}</h4>
        <br><br>
        <form action="/add_to_cart" method="POST">
            @csrf
            <input type="hidden" name="product_id" value={{$product['id']}}>
        <button class="btn btn-primary">Add to Cart</button>
        </form>
        <br><br>
        </div>
        <br><br>


<style>
    .container{
        position:absolute;
        top:2in;
    }
      .detail-img{
        height: 200px;
        /* margin-right: 500px; */
        margin-top: 50px;
       
    }
    .row{
        width:8in;
        height:4in;
        background: none;
        padding:20px;
        border-radius:25px;
        box-shadow: 0px 5px 10px #d3d3d3;
    }
</style>
@endSection
