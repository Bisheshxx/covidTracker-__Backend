@extends('layout/master')
@section("content")
<div class="custom-product">
     <div class="col-sm-10">
        <div class="trending-wrapper">
            <h4 style="margin-top:-1in; margin-bottom:50px; font-weight:700">Your Cart</h4>
            {{-- <a class="btn btn-success" href="ordernow">Order Now</a> <br> <br> --}}
            @foreach($products as $item)
            <div class=" row searched-item cart-list-devider">
             <div class="col-sm-3">
                <a href="detail/{{$item->id}}">
                    <img class="trending-image" src="{{$item->image}}">
                  </a>
             </div>
             <div class="col-sm-4" style="margin-left:1in">
                    <div class="">
                      <h2>{{$item->name}}</h2>
                      <h5>{{$item->description}}</h5>
                    </div>
             </div>
             <div class="col-sm-3">
                <a href="/removecart/{{$item->cart_id}}" class="btn btn-warning" >Remove</a>
             </div>
            </div>
            @endforeach
         

     </div>
</div>
@endsection
<style>
    .custom-product{
    position:absolute;
    margin-left:3in;
    top:2in;
    }</style> 