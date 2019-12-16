import React, { Component } from 'react'
import { connect } from 'react-redux'
 class AboveNavbar extends Component {
    render() {
      const { auth ,profile} = this.props;  
 console.log("amine",profile)
  if (auth.uid)
      {
        return (
 <div>
  <div class="py-1 bg-primary">
<div class="container">
<div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
<div class="col-lg-12 d-block">
<div class="row d-flex">
<div class="col-md pr-4 d-flex topper align-items-center">
<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
<span class="text">+ 1235 2355 98</span>
</div>
<div class="col-md pr-4 d-flex topper align-items-center">
<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
<span class="text">
  [momona]</span>
</div>
<div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
<span class="text">3-5 Business days delivery &amp; Free Returns</span>
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
          <div>
           <div class="py-1 bg-primary">
         <div class="container">
         <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
         <div class="col-lg-12 d-block">
         <div class="row d-flex">
         <div class="col-md pr-4 d-flex topper align-items-center">
         <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
        <span class="text">{}</span>
         </div>
         <div class="col-md pr-4 d-flex topper align-items-center">
         <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
         <span class="text">
           [username]</span>
         </div>
         <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
         <span class="text">3-5 Business days delivery &amp; Free Returns</span>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
          </div>
        )
      }
      
    }
}
const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile:state.firebase.profile
  }
}
export default  connect(mapStateToProps) (AboveNavbar);
