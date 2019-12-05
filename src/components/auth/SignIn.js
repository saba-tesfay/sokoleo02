import React from 'react'
import bg_1 from '../../images/bg_1.jpg';
import product_1 from '../../images/product_1.jpg'
// import './signin.css'
export default function SignIn() {
    return (
 <div>
<div class="container">
  <h2>Carousel Example</h2>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{width:'50%',backgroundColor:'red'}}>
  
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"/>
      <li data-target="#myCarousel" data-slide-to="1"/>
      <li data-target="#myCarousel" data-slide-to="2"/>
      <li data-target="#myCarousel" data-slide-to="2" style={{Color:'red'}}/>
    </ol>

    <div class="carousel-inner" >

      <div class="item active" style={{color:'red'}}>
      <img  src={product_1} alt="Colorlib Template"/>
        <div class="carousel-caption">
          <h3>Los Angeles</h3>
          <p>LA is always so much fun!</p>
        </div>
      </div>

      <div class="item">
      <img  class="img-fluid" src={product_1} alt="Colorlib Template"/>
        <div class="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>
    
      <div class="item">
      <img  class="img-fluid" src={product_1} alt="Colorlib Template"/>
        <div class="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
  
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

</div>
)
}
