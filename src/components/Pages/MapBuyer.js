import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
Geocode.setApiKey( "AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE" );
Geocode.enableDebug();

class Map extends Component{

	constructor( props ){
		super( props );
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			
		}
	}
	/**
	 * Get the current address from the default map position and set those values in the state
	 */
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate( nextProps, nextState ){
		if (
			this.state.mapPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state
		) {
			return true
		} else if ( this.props.center.lat === nextProps.center.lat ){
			return false
		}
	}
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	// getCity = ( addressArray ) => {
	// 	let city = '';
	// 	for( let i = 0; i < addressArray.length; i++ ) {
	// 		if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
	// 			city = addressArray[ i ].long_name;
	// 			return city;
	// 		}
	// 	}
	// };
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	// getArea = ( addressArray ) => {
	// 	let area = '';
	// 	for( let i = 0; i < addressArray.length; i++ ) {
	// 		if ( addressArray[ i ].types[0]  ) {
	// 			for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
	// 				if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
	// 					area = addressArray[ i ].long_name;
	// 					return area;
	// 				}
	// 			}
	// 		}
	// 	}
	// };
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	// getState = ( addressArray ) => {
	// 	let state = '';
	// 	for( let i = 0; i < addressArray.length; i++ ) {
	// 		for( let i = 0; i < addressArray.length; i++ ) {
	// 			if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
	// 				state = addressArray[ i ].long_name;
	// 				return state;
	// 			}
	// 		}
	// 	}
	// };
	/**
	 * And function for city,state and address input
	 * @param event
	 */
	onChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = ( event ) => {

	};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	
	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	onPlaceSelected = ( place ) => {
		console.log( 'plc', place );
		const address = place.formatted_address,
		      addressArray =  place.address_components,
		      
		      latValue = place.geometry.location.lat(),
          lngValue = place.geometry.location.lng();
          console.log('hellobkzjbvks',latValue,lngValue)
		// Set these values in the state.
		this.setState({
			address: ( address ) ? address : '',
			
			
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		})
	};


	render(){
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
          
					<GoogleMap google={ this.props.google }
                     defaultZoom={ this.props.zoom }
                     defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                     
					>
            {console.log('why are you not working',this.state.mapPosition)}
            { 
            
            props.marks.map((mark, index) =><> <Marker key={index} 
            
            google={this.props.google}
            position={{ lat: mark[0], lng: mark[1]  }}
          
             />
             <InfoWindow
             onClose={props.onInfoWindowClose}
             position={{ lat: ( mark[0] + 0.0108 ), lng: mark[1]}}
            >
             <div>
              {mark.sellername}
             </div>
            </InfoWindow></>)}
            
						{/* For Auto complete Search Box */}
						{/* <Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '500px'
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['(regions)']}
						/> */}
					</GoogleMap>
				)
			)
		);
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div>
				

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
export default Map