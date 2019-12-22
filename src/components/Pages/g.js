/* global google */
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MarkersList = props => {
  const { locations, ...markerProps } = props;
  return (
    <span>
      {locations.map((location, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: location.lat(), lng: location.lng() }}
          />
        );
      })}
    </span>
  );
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    console.log(location)
    this.setState(prevState => ({
      locations: [...prevState.locations, location]
    }));
    map.panTo(location);
  };

  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          className={"map"}
          zoom={this.props.zoom}
          initialCenter={this.props.center}
          onClick={this.handleMapClick}
        >
         <MarkersList locations={this.state.locations} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCd5GSrdhkRjDu53HCBVL7fh5QXa1-gIBE",
  libraries: []
})(MapContainer);
