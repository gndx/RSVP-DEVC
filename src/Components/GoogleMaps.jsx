import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MapWithAMarker = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 20.6698553, lng: -103.3824093 }}
  >
      <Marker position={{ lat: 20.6698553, lng: -103.3824093 }}></Marker>
  </GoogleMap>
));

class GoogleMaps extends Component {
  render() {
    return (
      <div className='innerMap' id="map">
        <MapWithAMarker
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw&v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className='responsiveMap' style={{ height: `670px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default GoogleMaps;