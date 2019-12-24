import React, { Component } from "react";
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import MapBuyyer from './MapBuyer'
class MapBuyer extends Component {
    render(){
        const {location,auth} = this.props
        let array=[]
        
        
            location&&location.map((list,index)=>{
            console.log(list)
            array.push(list)
        })
    
        
        console.log("the new one",array)
        // if(!auth.uid )return<Redirect to='/'/>
        // if(auth.userType==='seller' )return<Redirect to='/mapSeller'/>
        return(
            <div style={{ margin: '100px' }}>
				<MapBuyyer
                    google={this.props.google}
                    
					center={{lat: 18.5204, lng: 73.8567}}
                    height='600px'
                    marks={array}
					zoom={6}
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
  
  