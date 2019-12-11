import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg_1 from '../../images/bg_1.jpg';
import product_1 from '../../images/product_1.jpg'
import '../style.css'
import React from 'react'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const index=0
export default function ListProducts() {
 
    if(index%2==0) //if it is even photo display left side and details right else other wise
    {
    return (         
<div class="container">
  <div class="row "  style={{marginLeft:'20%'}}>
    
    <div class="col-md-6 col-lg-5 ">
    <div class="product">
      <Carousel responsive={responsive}>
           <div> <img class="img-fluid" src={bg_1} alt="Colorlib Template"/></div>
          <div><img class="img-fluid" src={product_1} alt="Colorlib Template"/></div>
             <div> <img class="img-fluid" src={bg_1} alt="Colorlib Template"/></div>
      </Carousel>
        </div>
     </div>
        <div class="col-md-6 col-lg-5 " >
        <div class="product"  style={{border:'0'}}>
            <div>
            <h3 style={{color:'#000',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'400'}}>Seller</h3>
            <h5>product Name</h5>
        <p>this is me seller and those are my products</p>
        </div>
        <div class="overlay"></div>
        <div class="text py-3 pb-4 px-3 text-center">
        <h3><a href="#">Bell Pepper</a></h3>
        <div class="d-flex">
        <div class="pl-2">
        <p><span>Price:$120.00</span></p>
        </div>
        </div>
   <div class=" d-flex px-3 ">
                <div class="m-auto d-flex">
                <a href="#" class="heart d-flex justify-content-center align-items-center  pr-3 ">
                <span><i  style={{fontSize:'170%'}}  class="ion-ios-heart"></i></span>
                </a>
                <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center pr-3">
                <span><i style={{fontSize:'170%'}}class="ion-ios-mail"></i></span>
                </a>
                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1  pr-3">
                <span><i  style={{fontSize:'170%'}} class="ion-ios-chatbubbles" ></i></span>
                </a>
                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1 pr-3">
                <span><i   style={{fontSize:'170%'}} class="ion-md-share"></i></span>
                </a>
                </div>
                </div>
        </div>
        </div>
        </div>
        <div class="col-md-6 col-lg-5 ftco-animate">
    <div class="product">
      <Carousel responsive={responsive}>
           <div> <img    class="img-fluid" src={product_1} alt="Colorlib Template"/></div>
           <div> <img class="img-fluid" src={bg_1} alt="Colorlib Template"/></div>
          <div><img class="img-fluid" src={product_1} alt="Colorlib Template"/></div>
      </Carousel>
        </div>
     </div>
        <div class="col-md-6 col-lg-5  ftco-animate" >
        <div class="product"  style={{border:'0'}}>
            <div>
            <h3 style={{color:'#000',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'400'}}>Seller</h3>
            <h5>product Name</h5>
        <p>this is me seller and those are my products</p>
        </div>
        <div class="overlay"></div>
        <div class="text py-3 pb-4 px-3 text-center">
        <h3><a href="#">Bell Pepper</a></h3>
        <div class="d-flex">
        <div class="pl-2">
        <p><span>Price:$120.00</span></p>
        </div>
        </div>
   <div class=" d-flex px-3 ">
                <div class="m-auto d-flex">
                <a href="#" class="heart d-flex justify-content-center align-items-center  pr-3 ">
                <span><i  style={{fontSize:'170%'}}  class="ion-ios-heart"></i></span>
                </a>
                <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center pr-3">
                <span><i style={{fontSize:'170%'}}class="ion-ios-mail"></i></span>
                </a>
                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1  pr-3">
                <span><i  style={{fontSize:'170%'}} class="ion-ios-chatbubbles" ></i></span>
                </a>
                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1 pr-3">
                <span><i   style={{fontSize:'170%'}} class="ion-md-share"></i></span>
                </a>
                </div>
                </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
    )
}else{
    return (  
        <div class="container">
                <div class="row">
                <div class="col-md-2 col-lg-3 ftco-animate"style={{marginLeft:'20%'}}>
                <div class="product">
                    <div>
                    <h3>seller product</h3>
                <p>uohheodkcohojojcoskmmooc</p>
                </div>
                <span class="status">30%</span>
                <div class="overlay"></div>
                <div class="text py-3 pb-4 px-3 text-center">
                <h3><a href="#">Bell Pepper</a></h3>
                <div class="d-flex">
                <div class="pl-2">
                  <p><span>Price:$120.00</span></p>
                </div>
                </div>
                <div class="bottom-area d-flex px-3">
                <div class="m-auto d-flex">
                <a href="#" class="heart d-flex justify-content-center align-items-center  pr-3 ">
                <span><i  style={{fontSize:'170%'}}  class="ion-ios-heart"></i></span>
                </a>
                <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center pr-3">
                <span><i style={{fontSize:'170%'}}class="ion-ios-mail"></i></span>
                </a>
                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1  pr-3">
                <span><i  style={{fontSize:'170%'}} class="ion-ios-chatbubbles" ></i></span>
                </a>
                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1 pr-3">
                <span><i   style={{fontSize:'170%'}} class="ion-md-share"></i></span>
                </a>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-2 col-lg-5 ftco-animate">
                <div class="product">
                <Carousel responsive={responsive}>
                   <div> <img class="img-fluid"  src={product_1} alt="Colorlib Template"/></div>
                   <div> <img class="img-fluid" src={bg_1} alt="Colorlib Template"/></div>
                    <div><img class="img-fluid" src={product_1} alt="Colorlib Template"/></div>
                </Carousel>
                </div>
                </div>
                </div>
                </div>

            )
}

}

