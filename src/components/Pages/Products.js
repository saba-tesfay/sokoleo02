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
import { firestoreConnect } from 'react-redux-firebase'
// const {seller}=this.props
class Products extends Component {
  state={
    search:'',
    location:'',
    value:[]
  }
 
 handelChange=(e)=>{
    // this.setState({
    //   [e.target.id]:e.target.value
    // })
     }
     handleSubmit=(e)=>{
      e.preventDefault();
   this.search(this.props,e.target.value,e.target.id)
         this.props.history.push('/')
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
    const {seller,location}=this.props;
    console.log("detail",{seller},{location})
    return (
      <div>
<div class="hero-wrap hero-bread"  style ={{ backgroundImage:`url(${bg_1})`}}>
<div class="container">
<div class="row no-gutters slider-text align-items-center justify-content-center">
<div class="col-md-9 ftco-animate text-center">
<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
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
<li><a href="#" class="active">All</a></li>
<li><a href="#">Vegetables</a></li>
<li><a href="#">Fruits</a></li>
<li><a href="#">Juice</a></li>
<li><a href="#">Dried</a></li>

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
    {this.state.value.length===0?(<ListProducts seller={seller}/>):(<ListProducts seller={this.state.value}/>)}
 </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    seller:state.firestore.ordered.sellerUpload,
    location:state.firestore.ordered.sellerLocation

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







