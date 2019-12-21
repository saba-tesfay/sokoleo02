import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
import { GoogleComponent } from 'react-google-location' 
import Geocode from "react-geocode";

 
 
const API_KEY = 'AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE'

Geocode.setApiKey("AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE");

Geocode.setLanguage("en");
 
Geocode.setRegion("es");

Geocode.enableDebug();

class Products extends Component {
  state={
    search:'',
    location:'',
    value:[],
    place:null
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
        const {seller,location}=props;
            console.log("tay",location)
        const works = seller.filter((val)=>{
        if(id==='search')
           return (val.productname.toLowerCase().includes(searchvalue.toLowerCase())||val.description.toLowerCase().includes(searchvalue.toLowerCase()))
           else if(id==='location'){
            Geocode.fromAddress(searchvalue).then(
              response => {
                const { lat, lng,northeast } = response.results[0].geometry.location;
                const t= response.results[0].formatted_address
                const r= response.results[0].geometry.bounds.northeast
                const c=response.results[0].geometry.bounds.southwest
                console.log("results",t,r,c,response.results[0].geometry.location);
              },
              error => {
                console.error("error",error);
              }
            );
           }
           else{
        if(id==='search')
        return (val.description.toLowerCase().includes(searchvalue))
           }
        });
        this.setState({
          value:works
        })
      
       }
  render() {
    const { authError,auth } = this.props;

    const {seller,location}=this.props;
        console.log("location",{location})
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
<h3 style={{color:'#82ae46',fontFamily:'poppins,Arial,sans-serif',lineHeight:'1.5', fontweight:'400'}}
          >Products</h3>
{/* <ul class="product-category">
<li><a href="#" class="active">All</a></li>
<li><a href="#">Vegetables</a></li>
<li><a href="#">Fruits</a></li>
<li><a href="#">Juice</a></li>
<li><a href="#">Dried</a></li>

</ul> */}
</div>
</div>
</div>
<form onSubmit={this.handleSubmit}>
<div class="input-group" >
{/* <i class="ion-ios-search" style={{position:'absolute',paddingLeft:'300px'}} ></i> */}
  <input type="text"class="form-control try" id='search'  
   onChange={this.handleSubmit} placeholder="Search seller name or product name" />
  {/* <i class="ion-ios-pin locationicon"></i> */}
  <input type="text" class="form-control trys" id='location' onChange={this.handleSubmit}  placeholder="Location"/>
{/*  
  <div  class="trys">
  <GoogleComponent
         
         apiKey={API_KEY}
         language={'en'}
        
         // country={in|country:pr|country:vi|country:gu|country:mp}
         coordinates={true}
         // locationBoxStyle={'custom-style'}
         // locationListStyle={'custom-style-list'}
         onChange={(e) => { this.setState({ place: e }) }} />
     
     </div> */}
 <button class="search-button">Search</button>
</div>
</form>
</section>
    {this.state.value.length===0?(<ListProducts seller={seller}/>):(<ListProducts seller={this.state.value}/>)}
 </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  console.log("ma",ownProps)
  const id=ownProps.match.params.id;
  console.log("okay",id)
  // const sellers=state.firestore.data.sellerUpload
  // const seller=sellers ? sellers[id]:null
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
]))(Products);







