import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey( "AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE" );
Geocode.enableDebug();

class Mapb extends Component{

	state = {
        searched:'',
        markerPosition: [],   
        mapPosition: {
            lat: -0.023559, lng: 37.90619300000003
        },  
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
						console.log("results",lat)
					   const r= response.results[0].geometry.bounds.northeast
					   const c=response.results[0].geometry.bounds.southwest
						this.setState({
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

	
	
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = ( event ) => {

	};
	render(){
		
		
		
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
          
					<GoogleMap google={ this.props.google }
                     defaultZoom={ this.props.zoom }
                     defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                     
					> 
					
            
            { 
				
			
            props.marks.map((mark, index) =><>
			{console.log('let this work',mark[2],mark[1])}
			 <Marker key={index} 
            position={{ lat: mark[0], lng: mark[1]  }}
          
             />
             <InfoWindow
             onClose={props.onInfoWindowClose}
             position={{ lat: ( mark[0]+ 0.0608 ), lng: mark[1]}}
            >
             <div>
              {mark[2]}
             </div>
			</InfoWindow></>)
		}
            
						
					</GoogleMap>
				)
			)
		);
		
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div>
				{console.log('2hello',this.state.mapPosition)}
				
				<AsyncMap
					googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE&libraries=places"
					
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
          }
          center={this.state.mapPosition.lat,this.state.mapPosition.lng}
					mapElement={
						<div style={{ height: `100%` }} />
          }
          marks={this.props.marks}
				/>
			</div>
		} else {
			map = <div style={{height: this.props.height}} />
		}
		return( map )
	}
}

export default Mapb;