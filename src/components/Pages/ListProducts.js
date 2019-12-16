import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg_1 from '../../images/bg_1.jpg';
import product_1 from '../../images/product_1.jpg'
import '../style.css'
import React, { Component } from 'react'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {connect} from 'react-redux';
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
const  ListProducts=(props) => {
  const {seller}=props
  console.log( "in my list product",{seller})
    return(
  
    <div>
          {seller&&seller.map((list,index)=>{
        
        if (index%2===0){
        return(
      < div class="container">
       <div class="row"  style={{marginLeft:'20%'}}>
      <div class="col-md-6 col-lg-5 ">
       <div class="product">
       <Carousel responsive={responsive}>
              {list.photo&&list.photo.map((image,i)=>{
               return ( 
             
                <img class="img-fluid" src={image} alt="Colorlib Template"/>
             
               )
              })}
                 </Carousel>
             </div>
                   </div>
                      <div class="col-md-6 col-lg-5 " >
                      <div class="product"  style={{border:'0'}}>
      <div>
    <h3 style={{color:'#000',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'400'}}
          >Seller</h3>
    <h5 style={{color:'#82ae46',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'30'}}
        >{list.name}</h5>
  <h6 style={{color:'#000',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'30'}}>
Product Description </h6>
        <p>{list.description}</p>
                      </div>
                      <div class="overlay"></div>
                      <div class="text py-3 pb-4 px-3 text-center">
          <h3><a href="#"></a></h3>
                      <div class="d-flex">
                      <div class="pl-2">
        <p><span>Price:${list.price}</span></p>
                      </div>
                      </div>
                 <div class=" d-flex px-3 ">
                 <div class="m-auto d-flex">
                              <a href="#" class="heart d-flex justify-content-center align-items-center  pr-3 ">
                              <span><i  style={{fontSize:'170%',color:'#82ae46'}}  class="ion-ios-heart"></i></span>
                              </a>
                              <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center pr-3">
                              <span><i style={{fontSize:'170%',color:'#82ae46'}}class="ion-ios-mail"></i></span>
                              </a>
                              <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1  pr-3">
                              <span><i  style={{fontSize:'170%',color:'#82ae46'}} class="ion-ios-chatbubbles" ></i></span>
                              </a>
                              <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1 pr-3">
                              <span><i   style={{fontSize:'170%',color:'#82ae46'}} class="ion-md-share"></i></span>
                              </a>
                              </div>
                  </div>
                      </div>
                      </div>
                      </div>
                      </div>
         </ div>
        )}else{
   return(
    < div class="container">
     <div class="row"  style={{marginLeft:'20%'}}>
     <div class="col-md-6 col-lg-5">
       <div class="product"  style={{border:'0'}}>
       <div>
         </div>
       <h3 style={{color:'#000',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'400'}}
    >Seller</h3>
    <h5 style={{color:'#82ae46',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'30'}}
   >{list.name}</h5>
<h6 style={{color:'#000',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'30'}}>
Product Description </h6>
   <p>{list.description}</p>
</div>
 <div class="overlay"></div>
                <div class="text py-3 pb-4 px-3 text-center">
    <h3><a href="#"></a></h3>
                <div class="d-flex">
                <div class="pl-2">
   <p><span>Price:${list.price}</span></p>
                </div>
                </div>
           <div class=" d-flex px-3 ">
                        <div class="m-auto d-flex">
                        <a href="#" class="heart d-flex justify-content-center align-items-center  pr-3 ">
                        <span><i  style={{fontSize:'170%',color:'#82ae46'}}  class="ion-ios-heart"></i></span>
                        </a>
                        <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center pr-3">
                        <span><i style={{fontSize:'170%',color:'#82ae46'}}class="ion-ios-mail"></i></span>
                        </a>
                        <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1  pr-3">
                        <span><i  style={{fontSize:'170%',color:'#82ae46'}} class="ion-ios-chatbubbles" ></i></span>
                        </a>
                        <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1 pr-3">
                        <span><i   style={{fontSize:'170%',color:'#82ae46'}} class="ion-md-share"></i></span>
                        </a>
                        </div>
                        </div>
                </div>
         </div>
                
      <div class="col-md-6 col-lg-5">
            <div class="product">
            <Carousel responsive={responsive}>
              {list.photo&&list.photo.map((image,i)=>{
               return ( 
             
                <img class="img-fluid" src={image} alt="Colorlib Template"/>
             
               )
              })}
                 </Carousel>
                </div>
       </div>
      </div>
  
   </ div>
      )
        }

  } )}
  
   </div>
    )

}


export default ListProducts;
