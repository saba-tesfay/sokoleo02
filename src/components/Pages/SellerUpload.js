import React, { Component } from 'react'
import {connect} from 'react-redux';
import fbConfig from'../../config/fbConfig';
import MapSeller from './MapSeller';
import {sellerupload} from '../../store/actions/SellerUploadAction';
import { withScriptjs, withGoogleMap, GoogleMap, Circle,Marker } from "react-google-maps";
import {Redirect} from 'react-router-dom'
const Map = withScriptjs(
  withGoogleMap(props => (
      <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat: -0.023559, lng: 37.90619300000003}}
          onClick={e => props.onMapClick(e)}
      >
       {console.log("belew",props.marks)}
          {props.marks.map((mark, index) => <Marker key={index} 
    
          // position={mark}
          position={{ lat: mark.lat(),  lng: mark.lng() }}
          // position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
        
           />)}
          {/* <Autocomplete
             style={{
              width: '50%',
              height: '40px',
              paddingLeft: '16px',
              marginTop: '10px',
              marginBottom: '100px'
             }}
            
          //    onPlaceSelected={ this.onPlaceSelected }
             types={['(regions)']}
            /> */}
      </GoogleMap>
  ))
);


class SellerUpload extends Component {
    state={
      price:'',
       photo:[],
        lat:'',
        lng:'',
        businessName:'',
        marketName:'',
        description:'',
        catagory:'',
        email:'',
        contactperson:'',
         progress:0
      }
    
    handelChange=(e)=>{

        this.setState({
        [e.target.id]:e.target.value,
        })
   console.log(this.state.file)
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
      
      //  this.props.history.push('/')
       console.log("upload",this.state)
      }
  handleUpload=(e)=>{
    
      }
      setRef=ref=>{
          this.file=ref
      }
    render() {
        const {auth,profile}=this.props
        const {seller}=this.props
        if(profile.userType==='Buyer') return <Redirect to='/'/>
        if(!auth.uid) return<Redirect to='/'/>
          const styles = {
              color:'#000',
              fontFamily:'poppins,Arial,sans-serif',
              lineHeight:'1.5', 
              fontweight:'30',
              fontSize:'18px'
      
            }
            return (
           <div>
           <section class="ftco-section contact-section bg-light">
      <div class="container py-5">
      
          <div class="row ">
         <div class="col-md-10 mx-auto bg-white" >
         <h2 style={styles}  class='pb-2 pt-4 text-center'>Add your Products</h2>
                   <form class="p-5">
                      <div class="form-group row">
                      <div class="col-sm-6">
                              <label for="inputbusinessname" style={styles}>Name of your Business</label>
                              <input type="text"  onChange={this.handelChange} class="form-control" id="businessName" placeholder="Name of your Business"/>
                          </div>
                          <div class="col-sm-6">
                              <label for="inputmarketName" style={styles}>Name of the Market</label>
                              <input type="text" onChange={this.handelChange}  class="form-control" id="marketName" placeholder="Name of the Market"/>
                          </div>
          
                      </div>
                      <div class="form-group row" style={styles}>
                      <div class="col-sm-6">
                              <label for="inputDiscription">description</label>
                              <textarea id="description"  onChange={this.handelChange} cols="30" rows="2" class="form-control" placeholder="Enter comment (optional)"/>
                          </div>
                          <div class="col-sm-6">
                              <label for="inputCatagory">Catagory</label>
                              <input type="text"onChange={this.handelChange} class="form-control" id="catagory" placeholder="Catagory"/>
                          </div>
                        
                      </div>
                      <div class="form-group row" style={styles}>
                          <div class="col-sm-6">
                              <label for="inputDiscription">description</label>
                              <textarea id="description"  onChange={this.handelChange} cols="30" rows="2" class="form-control" placeholder="Enter comment (optional)"/>
                          </div>
                          <div class="col-sm-6">
                          <label for="inputPrice">Price</label>
                              <input type="number" onChange={this.handelChange} class="form-control" id="price" placeholder="Price"/>
                          </div>
                      </div>
                      <div class="form-group row" style={styles}>
                          <div class="col-sm-6">
                              <label for="inputContactperson">Name For contact person</label>
                              <input type="text" onChange={this.handelChange} class="form-control" id="contactperson" placeholder="Name For contact person"/>
                          </div>
                          <div class="col-sm-6">
                          <div class="form-group" style={{position: 'relative',  overflow:' hidden', display: 'inline-block'}}>
                          <button  class=" bg-grey"><i style={{fontSize:'170%',fontWeight:'40',color:'white'}}
                                          class="ion-md-arrow-up"></i>Upload photo</button>
                          
                          <input type="file" ref={this.setRef} multiple   accept="image/*"
                          style={{position:"absolute",left:'0',top:'0', opacity:'0',borderRadius:'10px'}}/>
                      <i style={{fontSize:'170%',color:'#82ae46'}}   class="ion-md-share pl-3"></i>
                      </div>
                      <button type="button" onClick={this.handleSubmit} class="btn btn-primary px-4 float-right">Done uploading</button>
                      </div>
                          </div>
                      <div class="form-group row" style={styles}>
                          <div class="col-sm-6">
                              <label for="inputContactNumber">Cell phone </label>
                              <input type="number" onChange={this.handelChange} class="form-control" id="contactNumber" placeholder="Contact Number"/>
                          </div>
                          
                      </div>
                      <div class="form-group row" style={styles}>
                      <div class="col-sm-6" >
                              <label for="inputemail">Email</label>
                              <input type="email" onChange={this.handelChange} class="form-control" id="email" placeholder="Email (optional)"/>
                          </div>
                      </div>
                      
                      
                  </form>
                  <div class="row "  >
                  <div class="col-md-10 mx-auto " >
                            <h3>Set Location</h3>
                            <MapSeller seller={seller}
                                       sellerInfo={this.state}/>
                          </div>
                          </div>
              </div>
              
      
         
          
      </div>
      </div>
 </section>
 
 </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
      auth:state.firebase.auth,
      seller:state.firestore.data.sellerUpload,
      profile:state.firebase.profile
    }
  }
const mapDispatchToProps=(dispatch)=>{
 
      return {
        sellerupload :(uploads)=>dispatch(sellerupload(uploads))
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(SellerUpload);
