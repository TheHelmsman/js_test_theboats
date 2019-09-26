import PropTypes from "prop-types";
import React, { Component } from "react";
import history from "../history";
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

  constructor(props) {
    super(props);
    this.state = {
      center: [0,0],
      zoom: 13,
      viewport: props.viewport,
      markers: []
    };
  }

  getDerivedStateFrom({ viewport }) {
    // When the provided viewport changes, apply it
    if (viewport !== this.props.viewport) {
      this.setState({ viewport });
    }
  }

  onClickReset = () => {
    // Reset to position provided in props
    this.setState({ viewport: this.props.viewport });
  }

  onViewportChanged = (viewport) => {
    // The viewport got changed by the user, keep track in state
    this.setState({ viewport });
    if(!isNaN(Number(viewport.center[0])) && !isNaN(Number(viewport.center[1]))) {
      history.push('/#lat='+viewport.center[0]+'&lng='+viewport.center[1]);
    }
  }

  render() {

    const { center, markers } = this.props;
    return (
      <Map 
        center={center} 
        zoom={this.state.zoom}
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    );
  }
}