import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapWithAMarker = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }}></Marker>
  </GoogleMap>
));

class GoogleMaps extends Component {
  render() {
    const {lat, lng } = this.props;
    return (
      <div className='innerMap' id="map">
        <MapWithAMarker
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw&v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className='responsiveMap' style={{ height: `670px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat={lat}
          lng={lng}
        />
      </div>
    )
  }
}

export default GoogleMaps;