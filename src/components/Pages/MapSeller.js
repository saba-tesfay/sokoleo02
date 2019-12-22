import React, { Component } from "react";
import {getLocation} from '../../store/actions/LocationAction'
import { withScriptjs, withGoogleMap, GoogleMap, Circle,Marker } from "react-google-maps";
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
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

class MapSeller extends Component {
    state = {
        markerPosition: [],

     
    };

    setMark = e => {
        
        console.log('this is it',e.latLng)
       this.setState({ markerPosition: [...this.state.markerPosition,e.latLng],
        pos:[e.latLng.lat(),e.latLng.lng()]
        
    
        });
        
        
        console.log('the array ',this.state.pos)
    };
    onSubmit=e=>{
        this.state.markerPosition.map((Element,index)=>{
            console.log('akjfbsgkfeudfhbjlg',Element.lat(),Element.lng())
            
            
            
            this.props.getLocation([Element.lat(),Element.lng()])
        })
        this.props.history.push('/sellerupload')
        // return(
        // <Redirect to='/sellerupload'/>)
        
    }
    deleteMarkS = () => {
        this.setState({
            markerPosition: [],
            pos:[]
        });
    };

    render() {
        const { markerPosition } = this.state;
        const {auth}=this.props
        
        // if(!auth.uid )return<Redirect to='/'/>
        // if(auth.userType==='buyer' )return<Redirect to='/mapBuyer'/>
        return (
            <div >
                

                <Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `500px`,width:'80%', marginLeft:'10%'}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapClick={this.setMark}
                    center={{lat: -0.023559, lng: 37.90619300000003}}
                    marks={markerPosition}
                />;
                <div style={{marginLeft:'30%',marginBottom:'70px'}}>
                <button onClick={this.deleteMarkS}    class="btn btn-primary py-3 px-5">Clear</button>
                <button onClick={this.onSubmit} style={{marginLeft:'30%'}} class="btn btn-primary py-3 px-5">Submit</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        position:state.firestore.ordered.sellerLocation,
        auth:state.firebase.auth
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
        getLocation:(newLocation)=>dispatch(getLocation(newLocation))
    }
  }
 
  export default connect(mapStateToProps,mapDispatchToProps)(MapSeller);