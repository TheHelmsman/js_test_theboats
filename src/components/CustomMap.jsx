import PropTypes from "prop-types";
import React, { Component } from "react";

import {
  Map,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <div style={{ display: "none" }}>{items}</div>;
};
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired
};

export default class CustomMap extends Component {
  state = {
    center: [0,0],
    zoom: 13,
    markers: []
  };

  render() {

    const { center, markers } = this.props;
    console.log('---CustomMap.render()');
    console.log(this.state);
    return (
      <Map center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    );
  }
}