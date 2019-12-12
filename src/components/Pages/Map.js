import React, { Component } from 'react'
import Location from './Location';
class Map extends React.Component{
render() {
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
  
export default Map;

