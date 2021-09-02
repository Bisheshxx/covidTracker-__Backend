<?php
    use app\Http\Controllers\ProductController;
    $total = 0;
    if(Session::has('user')){
        $total = ProductController::cartTotal();
    }
   
?>
{{-- <div>
    <a class="navbar-brand" href="/">E-Comm</a>
</div> --}}
<div class="top_header">
    <ul class="log">
    @if(Session::has('user'))
             
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="/cartlist">Hello {{Session::get('user')['name']}}
      <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="/logout">Logout</a></li>
      </ul>
    </li>
    @else
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Registration</a></li>
    @endif

              
          </ul>
</div>
 <div class="header">
    
        <div class="logo">
            <a href="/product">
            <h1>Ecommerce</h1>
        </a>
        </div>
        <div class="search">
            <input type="text" placeholder="find the product">
            <button type="submit" style="background:#EA1B25; color:white;border:none ">Search</button>
        </div>
        <div class="navi">

          
            
            <nav>
             
                <ul class="nav_links">
                    <li class="link"><a href="/product">Home</a></li>
                    <li class="link"><a href="/product">Products</a></li>
                    <a href="/cartlist">
                    <li class="link" id="CART">cart({{$total}})</li>
                    </a>
                </ul>
                   
            </nav>
                
          
        </div>


 <style>
     .search{
                margin-top: 15px;
               margin-left: 8%;
               margin-bottom: 15px;
               display: flex;
     }
            .search input{
                width: 300px;
                padding: 5px 10px;
            }

            }
            .top_header{
                width: 100%;
            }
           .log{
               margin-left:7%; 
               display: flex;
               list-style: none;
           }
           .log li{
               margin: 0 10px;
           }
           .logo{
               margin-left: 50px;
               width:2in;
               color: white;
           }
              .header {
    height: 12vh;
    width: 100%;
    display: flex;
    padding: 0;
    background: #0f233c;
    position: relative;
}

nav ul{
    padding: 20px 0;
    display: flex;
}
.nav_links li {
    display: inline-block;
    margin: 8px 20px;
    margin-left:.4in;
    color: white;
    padding-bottom: 30px;
}
#CART{
    position:relative;
    left:250px;
}
.nav_links li a {
    text-decoration: none;
    color: #fff;
    padding: 5px 0;
    position: relative;
}

.nav_links li a::after {
    content: '';
    background: #fff;
    width: 0;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.5s;
}

.nav_links li a:hover::after {
    width: 100%;
}
        </style>


       