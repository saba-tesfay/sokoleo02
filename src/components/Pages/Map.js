import React, { Component } from 'react'
import Location from './Location';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
class Map extends React.Component{
render() {
    const {auth}=this.props
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
        
        <div style={{margin:'90px'}}>
            <Location
            google={this.props.google}
            center={{lat: -0.45275,lng: 39.64601}}
            height='300px'
            width='100px'
            zoom={15}
            />
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return {
      auth:state.firebase.auth
    }
  }
  export default connect(mapStateToProps)(Map);

