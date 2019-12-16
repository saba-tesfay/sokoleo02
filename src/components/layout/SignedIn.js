import React from 'react'
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'
import AboveNavbar from './AboveNavbar';
const SignedIn = (props) => {
  
    return (
      <div>
        <AboveNavbar/>
<nav  class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
<div class="container">
<a class="navbar-brand" href="index.html">Sokonileo</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span class="oi oi-menu"></span> Menu</button>
<div class="collapse navbar-collapse" id="ftco-nav">
<ul class="navbar-nav ml-auto">
<li class="nav-item"><a href="/" class="nav-link"><i  class="icon-shopping_cart pr-2 "/>products</a></li>
<li class="nav-item"><a href="index.html" class="nav-link"><i  class="ion-ios-chatbubbles pr-2"/>My chat</a></li>
<li class="nav-item"><a href="blog.html" class="nav-link"><i  class="ion-ios-person pr-2"/>Profile</a></li>
<li class="nav-item"><a href="./contactus" class="nav-link"><i  class="ion-ios-call pr-2"/>Contact us</a></li>
<li class="nav-item"><a href="./aboutus" class="nav-link"><i  class="ion-ios-home pr-2"/>About Us</a></li>
<li class="nav-item"><a href=""onClick={props.signOut}  class="nav-link"><i  class="ion-ios-home pr-2"/>Log Out</a></li>
</ul>
</div>
</div>
</nav>  
</div>
    )
}


const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedIn);