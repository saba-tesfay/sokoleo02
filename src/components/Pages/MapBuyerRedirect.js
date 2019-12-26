import React, { Component } from "react";
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import{Redirect} from 'react-router-dom'
import MapBuyyer from './MapBuyer'

import Geocode from "react-geocode";
Geocode.setApiKey( "AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE" );
Geocode.enableDebug();
class MapBuyer extends Component {
    state = {
        searched:'',
        markerPosition: [],   
        mapPosition: {
            lat: -0.023559, lng: 37.90619300000003
        },  
        northEast:{
            lat: '',
             lng: ''
        },
		southWest:{
            lat: '', 
            lng: ''
        }
    };
    handelChangeAuto=(e)=>{
        this.setState({
          searched:e.target.value,
        })
         }
    handleSubmit=(e)=>{
      
            e.preventDefault();
            
            const search=(props,searchvalue)=>{
                console.log(searchvalue)
                    
                  if (searchvalue==='')
                  {return(
                    this.setState({
                        mapPosition: {
                            lat: -0.023559, lng: 37.90619300000003
                        },
                    })
                  )}
                else {
                    
                    Geocode.fromAddress(searchvalue).then(
                      
                      response => {
                        const { lat, lng,northeast } = response.results[0].geometry.location;
                        const t=response.results[0].geometry.location
                        const r= response.results[0].geometry.bounds.northeast
					   const c=response.results[0].geometry.bounds.southwest
                        
                        this.setState({
                          mapPosition:t,
                          northEast:r,
						  southWest:c
                        })
                       
					   
						
                        
                      },
                      error => {
                        console.error("error",error);
                      }
                    );
                   }
                  
                   
                };
                search(this.props,this.state.searched)	
              console.log(this.state.mapPosition,'this should work')
              
               
         }
    render(){
        const {location,auth} = this.props
        if(!auth.uid) return<Redirect to='/'/>
        let array=[]
        
        
        
            location&&location.map((list,index)=>{
                if((list[0]>this.state.northEast.lat || list[0]<this.state.southWest.lat)||(list[1]>this.state.northEast.lng || list[1]<this.state.southWest.lng))
            {
              console.log('i have found one')
              
            }else{
              array.push(list)
            }})
    
        
        // if(!auth.uid )return<Redirect to='/'/>
        // if(auth.userType==='seller' )return<Redirect to='/mapSeller'/>
        return(
            <div style={{ margin: '100px' }}>
             <div class="form-group row">
                          <div class="col-sm-6">
                            <input type="text"  class="form-control" id='location' onChange ={this.handelChangeAuto}  placeholder="Location"/>
                          </div>
                          <div class="col-sm-6">
                          <div class="form-group" style={{position: 'relative',  overflow:' hidden', display: 'inline-block'}}>
                          <button  class="btn btn-primary px-5 float-right" onClick={this.handleSubmit}>Search</button>
                      </div>
                    
                      </div>
                          </div>
				<MapBuyyer
                    google={this.props.google}
                    
					center={{lat:this.state.mapPosition.lat,lng:this.state.mapPosition.lng}}
                    height='600px'
                    marks={array}
					zoom={12}
				/>
			</div>
        )
    
    }
   
}

const mapStateToProps=(state)=>{
    return{
        location:state.firestore.ordered.sellerLocation,
        auth:state.firebase.auth,
        
    }
  }
 
  export default compose(connect(mapStateToProps),  firestoreConnect([
    {collection:'sellerLocation',orderedBy:['time','desc']},
  ]))(MapBuyer);
  
  