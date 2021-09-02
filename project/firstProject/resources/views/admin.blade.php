
@extends('layout/master')

@section('content')
{{-- @if (Session::has('user'))

<script>
  swal('logged in','{!! Session::get('user')!!}','success'{
    button='ok',
  })
</script>
    
@endif --}}
<div class="custom_login">
<form class="login-form" method="POST" action="adminLogin">

    <div class="mb-3">
      @csrf
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" name="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
     
      <div class="btns">
      <button  style="width:1.5in; background-color:#0f233c">Login</button>
     
      <a href="/register" style="width:1.5in; color:black">Register</a>
  
    </div>
    </div>
    
  </form>
</div>
@endSection
<style>
  .custom_login{
        position:absolute;
        left:5in;
        top:.8in;
        height: 300px;
        padding-top: 100px;
    }
  .mb-3{
    margin: .2in 0;
  }
  .login-form{
    position: absolute;
    width:4in;
    height:2.5in;
    padding: 0 10px;
    background: white;
    border-radius:10px;
    box-shadow: 0px 5px 10px #d3d3d3;
  }
  .btns{
    position: absolute;
    height:30px;
    width:3.8in;
    left:.2in;
  }
  .btns button{
    margin:0 10px;
    color:white;
    border:none;
    height:30px;
    border-radius:5px;

  }
</style>
    