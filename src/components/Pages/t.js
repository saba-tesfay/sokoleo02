import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Circle,Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE");
 
// set response language. Defaults to english.
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
// Get address from latidude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   response => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   error => {
//     console.error(error);
//   }
// );
 
// // Get latidude & longitude from address.
// Geocode.fromAddress("castle").then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log("belew",lat, lng);
//   },
//   error => {
//     console.error(error);
//   }
// );
class R extends Component {
  

    render() {
      
        return (
            <div>
        <h2> </h2>
            </div>
        );
    }
}

export default R;