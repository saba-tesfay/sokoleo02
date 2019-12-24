import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey( "AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE" );
Geocode.enableDebug();

class Mapb extends Component{

	constructor( props ){
		super( props );
		this.state = {
			searched: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			
		}
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
            google={this.props.google}
            position={{ lat: mark[0], lng: mark[1]  }}
          
             />
             <InfoWindow
             onClose={props.onInfoWindowClose}
             position={{ lat: ( mark[0]+ 0.0108 ), lng: mark[1]}}
            >
             <div>
              {mark[2]}
             </div>
            </InfoWindow></>)}
            
						
					</GoogleMap>
				)
			)
		);
		
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div>
				{console.log('2hello',this.state.mapPosition)}
				<input type="text" class="form-control trys" id='location' onChange ={this.handelChange}  placeholder="Location"/>
				<button class="search-button" onClick={this.handleSubmit}>Search</button>
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