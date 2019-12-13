import React, { Component } from 'react'
import {sellerupload} from '../../store/actions/SellerUploadAction';
import {connect} from 'react-redux';
import fbConfig from'../../config/fbConfig';
class SellerUpload extends Component {
    state={
        name:'',
        markettag:'',
        price:'',
        comment:'',
        description:'',
        photo:[]
      }
      handelUpload=(e)=>{
      
         }
    handelChange=(e)=>{

        this.setState({
        [e.target.id]:e.target.value,
        })
   console.log(this.state.file)
 }
 
 handelChanges=(e)=>{
        
    this.setState({
    [e.target.id]:e.target.file[0],
    })

}
      handleSubmit=(e)=>{
    
      e.preventDefault();
      const storageRef=fbConfig.storage().ref();
      for (var i =0 ; i <this.file.files.length; i++) {
          const file=this.file.files[i]
      const mainimage=storageRef.child(this.file.files[i].name)
      mainimage.put(file).then((snapshot)=>{
          mainimage.getDownloadURL().then((url)=>{
            let photos=this.state.photo
            photos.push(url)
              this.setState({
               photo:photos
              })
          })
         
      })
      }
      console.log(this.state)
      this.props.sellerupload(this.state)
      //  this.props.history.push('/')
       console.log("upload",this.state)
      }
    

      handleUpload=(e)=>{
    
      }
      setRef=ref=>{
          this.file=ref
      }
    render() {
    //   console.log("checkinh",this.state.photo)
        return (
    <div>
 <section class="ftco-section contact-section bg-light" >
<div class="row block-3">
<div class="col-md-4 order-md-last d-flex" style={{marginLeft:'30%'}}>
<form action="#" class="bg-white p-5 contact-form" onSubmit={this.handleSubmit} >
<h2 class='pb-2'>Seller Upload</h2>
<div class="form-group">
<input type="text" id="name" onChange={this.handelChange} class="form-control" placeholder="Enter Name"/>
</div>
<div class="form-group">
<input type="text" id="markettag" onChange={this.handelChange} class="form-control" placeholder="Enter MarketTag"/>
</div>
<div class="form-group">
<input type="text" id="price" onChange={this.handelChange} class="form-control" placeholder="Enter Price"/>
</div>
<div class="form-group">
<textarea name="" id="comment"  onChange={this.handelChange} cols="30" rows="2" class="form-control" placeholder="Enter comment (optional)"/>
</div>
<div class="form-group">
<textarea name="" id="description"  onChange={this.handelChange} cols="30" rows="5" class="form-control" placeholder="Add Description"/>
</div>
<div class="form-group" style={{position: 'relative',  overflow:' hidden', display: 'inline-block'}}>
<button onClick={this.handleUpload}  class=" bg-grey"><i style={{fontSize:'170%',fontWeight:'40',color:'white'}}
class="ion-md-arrow-up"></i>Upload photo</button>
<input type="file" ref={this.setRef} multiple 
style={{position:"absolute",left:'0',top:'0', opacity:'0',borderRadius:'10px'}}/>
 <i style={{fontSize:'170%',color:'#82ae46'}}   class="ion-md-share pl-3"></i>
</div>  
<div class="form-group">
<input type="submit" value="Done"  class="btn btn-primary py-3 px-5"/>
</div>
</form>
{/* <img src={this.state.photo || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/> */}
</div>
</div>
 </section>
 </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
 
      return {
        sellerupload :(uploads)=>dispatch(sellerupload(uploads))
      }
  }
export default connect(null,mapDispatchToProps)(SellerUpload);
