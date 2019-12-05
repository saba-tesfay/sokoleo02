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
class Products extends Component {
  state={
    search:'',
    location:''
  }
 handelChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
     }
 handleSubmit=(e)=>{
     e.preventDefault();
      this.props.ProductSearch(this.state)
      console.log(  this.state)
     }
 
  render() {
    const {sellerDetails}=this.props;
    console.log("detail",this.props)
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
<div class="input-group"  >
<i class="ion-ios-search searchicon"></i>
  <input type="text" class="search-input-productpage" id='search' onChange={this.handelChange} placeholder="Search seller name or product name" />
  <i class="ion-ios-pin locationicon"></i>
  <input type="text" class="location-search-input-productpage" id='location' onChange={this.handelChange}  placeholder="Location"/>
  <button class="search-button" onSubmit={this.handleSubmit} >search</button>
</div>
</section>
<ListProducts sellerDetails={sellerDetails}/>
 </div>
    )
  }
}

const mapStateToProps=(state,ownProps)=>{
  console.log("prod",ownProps);
  const id=ownProps.match.params.id;
  console.log(id)
  const  sellerDetails=state.firestore.ordered.sellerUpload
  console.log("all details",sellerDetails)
const sellerDetail=sellerDetails ? sellerDetails[id]:null;
console.log('singledetail',sellerDetail)
  return {
    sellerDetails:sellerDetail
  }
}
export default compose(connect(mapStateToProps),  firestoreConnect([
  {collection:'sellerUpload'}
]))(Products);







