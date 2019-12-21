import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'
import bg_1 from '../../images/bg_1.jpg'
import bg_2 from '../../images/bg_2.jpg'
import {Input} from 'antd'
import 'antd/dist/antd.css';
class SignUpSeller extends Component {
  state={
      email:'',
      password:'',
      name:'',
      PhoneNum:'',
      AlternateNum:'',
      userType:'seller',
      show:true
  }
  
  toggleShow=()=>{
    
    this.setState({
      show:false
    })
    
  }
  handelChange=(e)=>{
     this.setState({
         [e.target.id]:e.target.value
     })
  }
  handelSubmit=(e)=>{
      e.preventDefault();
      
      if (this.state.show==false)
      {console.log(this.state.show) 
        this.props.signUp(this.state)}
      else{
        console.log(this.state.show)
      }
          
  }
  render() {
      const {auth,authError}=this.props
      if(auth.uid)return<Redirect to='/products'/>
    return (
        <div>
            <section class="ftco-section contact-section bg-light">
<div class="container">
<div class="row block-9">
<div class="col-md-6 order-md-last d-flex">
<form action="#" class="bg-white p-5 contact-form" >
<div class="form-group">
<h2 style={{textAlign:'center'}}> Register my account as a Seller</h2>
</div>
<div class="form-group">
<input type="text" id="name" class="form-control" placeholder="User Name" onChange={this.handelChange}/>
</div>
<div class="form-group" >
<Input.Password id="password" className="psw-input" placeholder="Password" onChange={this.handelChange}/>
</div>
<div class="form-group">
<input type="text" id="email" class="form-control" placeholder="Email(optional)" onChange={this.handelChange}/>
</div>
<div class="form-group">
<input type="text" id="PhoneNum" class="form-control" placeholder="Phone number" onChange={this.handelChange}/>
</div>
<div class="form-group">
<input type="text" id="AlternateNum" class="form-control" placeholder="Alternate Phone number" onChange={this.handelChange}/>
</div>
<div style={{color:'red'}}>
  {authError}
</div>
<div class="form-group">
{(this.state.show)?<button  style={{marginLeft:'100px',marginTop:'20px'}} data-toggle="modal" data-target="#exampleModal" class="btn btn-primary py-3 px-5">Continue</button>
:<button href={"/products"} onClick={this.handelSubmit} style={{marginLeft:'100px',marginTop:'20px'}}  class="btn btn-primary py-3 px-5">Submit</button>
}
</div>
</form>
</div>
{/* <div class="col-md-6 order-md-last d-flex" >
  <div class="home-slider owl-carousel" >
                    <div class="slider-item" style={{backgroundImage: `url(${bg_1})`}} >                    
                           </div>
                <div class="slider-item" style={{backgroundImage: `url(${bg_2})`}}>
                   
                    </div>
                </div>

  </div> */}

</div>
</div>
</section>
<div  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Terms and Conditions</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <textarea rows="13" cols="55" disabled>Sint ut laborum nostrud commodo. Aute ea culpa mollit do excepteur reprehenderit cupidatat cillum reprehenderit culpa nulla. Exercitation duis dolore nulla velit culpa consequat incididunt est proident culpa incididunt id fugiat nulla. Consequat dolor aliqua eiusmod voluptate. Occaecat qui consequat dolor aliqua labore esse. Occaecat ipsum ullamco officia deserunt ad eiusmod. Adipisicing incididunt dolore non sunt eu culpa.
        Sint ut laborum nostrud commodo. Aute ea culpa mollit do excepteur reprehenderit cupidatat cillum reprehenderit culpa nulla. Exercitation duis dolore nulla velit culpa consequat incididunt est proident culpa incididunt id fugiat nulla. Consequat dolor aliqua eiusmod voluptate. Occaecat qui consequat dolor aliqua labore esse. Occaecat ipsum ullamco officia deserunt ad eiusmod. Adipisicing incididunt dolore non sunt eu culpa.
        Sint ut laborum nostrud commodo. Aute ea culpa mollit do excepteur reprehenderit cupidatat cillum reprehenderit culpa nulla. Exercitation duis dolore nulla velit culpa consequat incididunt est proident culpa incididunt id fugiat nulla. Consequat dolor aliqua eiusmod voluptate. Occaecat qui consequat dolor aliqua labore esse. Occaecat ipsum ullamco officia deserunt ad eiusmod. Adipisicing incididunt dolore non sunt eu culpa.
        </textarea>
        </div>
      <div class="modal-footer">
      <input type="checkbox" name="vehicle1" value="Bike" /> I agree with terms and Conditions
        <div class="form-group">
      <button  data-dismiss="modal" onClick={this.toggleShow} style={{marginLeft:'2',marginTop:'20px',width:'200px'}}  class="btn btn-primary py-3 px-5">Continue</button>
      </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}}
const mapStateToProps=(state)=>{
  return{
      auth:state.firebase.auth,
      authError:state.auth.authError
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    
      signUp:(newUser)=>dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUpSeller)

