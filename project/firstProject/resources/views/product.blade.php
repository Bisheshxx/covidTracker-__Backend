
@extends('layout/master')

@section('content')
<div class="custom-product">
 
    </div>


<!-- IMPORTANTTTT -->

<div class="innerbody">
  <div class="imag">
  <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80" alt="shoes" class="shoeimage">
<h2> GET ALL ORIGINAL <span class="span1">PRODUCTS</span></h2>
<p> Get hands on the all new nike shoes.<span class="span2">Bringing the iconic shoes to nepalese feet</span></p>
<button style="margin-left:.9in; position:absolute; top:2.6in;width: 1.2in; background-color:#EA1B25; border:none; color:white;height:30px" >Shop now</button>
</div>
</div>
<div class="secondbody">
<div class="boxes">
  
  @if(Session::has('user'))
  <button>Add product</button>
  @else
  <h3 style="font-weight: 700">Trending Shoes</h3>
 <div class="bigbox">
  @foreach ($product as $item)
  <div class="boxx">
    <div class="smallbox">
      {{-- <a href="detail/{{$item['id']}}"> --}}
      <img class="images" src="{{$item['image']}}">
      <h3>{{$item['name']}}</h3>
      <p>{{$item['description']}}</p>
      <h4>Rs.{{$item['price']}}</h4>
      <a href="detail/{{$item['id']}}">
      <button >Details</button>
      </a>
    </a>

    </div>
  </div>

  @endforeach
</div>
@endif

</div>
</div>

    {{-- <div class="trending-wrapper">
      <h3>Tredning Products</h3>
    
      <div class="trening-item">
        <a href="detail/{{$item['id']}}">
        <img class="trending-image" src="{{$item['image']}}">
        <div class="">
          <h3>{{$item['name']}}</h3>
        </div>
      </a>
      </div>
      @endforeach
    </div> --}}
    </div>
</div>
<style>
  .innerbody{
    position:absolute;
    background: #FBFBFB;
    margin-top:.77in;
    width:100%;
  }
  .secondbody{
    position:absolute;
    background: white;
    margin-top:4.5in;
    height:5in;
    width:100%;
  }
  .innerbody h2{
    position: absolute;
    top:1in;
    left:5.5in;
    font-weight:830;
    font-style: italic;
  }
  .innerbody p{
    position: absolute;
    top:2in;
    left:5.5in;
    font-weight:500;
  }
  .span1{
    margin-top:.02in;
    display: block;
  }
  .span2{
    margin-top:.02in;
    display: block;
  }
    .shoeimage{
      margin-left:15%;
      width:250px;
    }

 .boxes{
   width:8in;
   height:4in;
   margin:.6in 2.6in;
   background: white;
 }   
 .boxx{
   padding-top:10px;
   padding-left:10px;
   padding-right:10px;
   width:2.5in;
   height:3in; 
   margin:0 10px;
   background: white;
   border:rgb(206, 206, 206) solid;
   border-width: .5px;
 }
 .bigbox{
   display: flex;
   margin-top:.2in;
 }
 .smallbox{
  width:2.22in;
  height:1.2in;
  background:none
 }
 .images{
   width:2.2in;
 }
 .smallbox h3{
   font-size: 16px;
   font-weight:700
 }
 .smallbox p{
   font-size: 12px;
   font-weight:500
 }
 .smallbox h4{
   font-size: 16px;
   font-weight:700
 }
 .smallbox button{
   position: relative;
   font-size: 12px;
   font-weight:500;
   margin-left:1.3in;
   top:-.2in;
   height:30px;
   background: #EA1B25;
   border:none;
   color:white;
   width:.9in;
   
 }
</style>
@endSection
