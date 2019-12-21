import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import bg_1 from '../../images/bg_1.jpg';
import product_1 from '../../images/product_1.jpg'
import ListProducts from './ListProducts';
import './Products.css';
import {connect} from 'react-redux';
import {listProducts} from'../../store/actions/productActions';
import {ProductSearch} from '../../store/actions/ProductSearchAction'
import {compose} from 'redux'

import{Redirect} from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
// const {seller}=this.props
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
  
class Profile extends Component {
  state={
    search:'',
    location:'',
    value:[],
    list:{}
  }
 
 handelChange=(e)=>{
    // this.setState({
    //   [e.target.id]:e.target.value
    // })
     }
     handleSubmit=(e)=>{
      e.preventDefault();
   this.search(this.props,e.target.value,e.target.id)
        //  this.props.history.push('/')
         console.log(this.state)
      }
       search=(props,searchvalue,id)=>{
        const {seller}=props;
        console.log("waa",seller[0].productName)
        const works = seller.filter((val)=>{
          console.log(val.productName)
          if(id==='search')
           return (val.name.includes(searchvalue)||val.description.includes(searchvalue))
           else{
            return (val.description.includes(searchvalue))
           }
        });
        this.setState({
          value:works
        })
        console.log("ndjjsd",this.state.value)
       }
  render() {
    const { authError,auth } = this.props;
    const {seller,location}=this.props;
    
    seller&&seller.map((theSeller,index)=>{
        if(theSeller.authId===auth.uid){
            this.setState({
                list:theSeller
            })
            
        }
    })
    console.log("detail",{seller},{location})
    if(!auth.uid) return<Redirect to='/'/>
    return (
      <div>
<div class="hero-wrap hero-bread"  style ={{ backgroundImage:`url(${bg_1})`}}>
<div class="container">
<div class="row no-gutters slider-text align-items-center justify-content-center">
<div class="col-md-9 text-center">
<p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Products</span></p>
<h1 class="mb-0 bread">Products</h1>
</div>
</div>
</div>
</div>
<section class="ftco-section">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-10 mb-5 text-center">
<ul class="product-category">
<li><a href="/sellerupload" class="active">Edit Profile</a></li>


</ul>
</div>
</div>
</div>
<form onSubmit={this.handleSubmit}>
<div class="input-group" >
<i class="ion-ios-search searchicon"></i>
  <input type="text" class="search-input-productpage" id='search'  onChange={this.handleSubmit} placeholder="Search seller name or product name" />
  <i class="ion-ios-pin locationicon"></i>
  <input type="text" class="location-search-input-productpage" id='location' onChange={this.handleSubmit}  placeholder="Location"/>
  <button class="search-button"  >search</button>
</div>
</form>
</section>
    
    < div class="container">
       <div class="row"  style={{marginLeft:'20%'}}>
      <div class="col-md-6 col-lg-5 ">
       <div class="product">
       <Carousel responsive={responsive}>
              {this.state.list.photo&&this.state.list.photo.map((image,i)=>{
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
        >{this.state.list.name}</h5>
  <h6 style={{color:'#000',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'30'}}>
Product Description </h6>
        <p>{this.state.list.description}</p>
                      </div>
                      <div class="overlay"></div>
                      <div class="text py-3 pb-4 px-3 text-center">
          <h3><a href="#"></a></h3>
                      <div class="d-flex">
                      <div class="pl-2">
        <p><span>Price:${this.state.list.price}</span></p>
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
      
 </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  console.log("ma",state)
  const id=ownProps.match.params.id;
  console.log(id)
  return {


    seller:state.firestore.ordered.sellerUpload,
    location:state.firestore.ordered.sellerLocation,
    authError: state.auth.authError,
    auth:state.firebase.auth

  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    ProductSearch:(searchvalue)=>dispatch(ProductSearch(searchvalue))
  }
}
export default compose(connect(mapStateToProps,mapDispatchToProps),  firestoreConnect([
  {collection:'sellerUpload',orderedBy:['time','desc']},
  {collection:'sellerLocation',orderedBy:['time','desc']},
]))(Profile);







