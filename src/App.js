import React from "react";
import CustomMap from "./components/CustomMap";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 13,
      markers: [] 
    };
  }

  getUserLocation() {
    var that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('lat: '+position.coords.latitude+' long: '+position.coords.longitude);
        that.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 13,
          markers: [
            {
              key: "marker1",
              position: [position.coords.latitude, position.coords.longitude],
              children: "User location"
            }
          ]
        })
        console.log('---');
        console.log(that.state);
      }, function() {
        console.log('error');
      });
    } else {
      console.log('error: Browser doesn\'t support Geolocation');
    }
  }

  componentDidMount() {
    console.log('---componentDidMount');
    console.log(this.state);

    //  get  user location
    this.getUserLocation();
  }

  render() {
    const { lat, lng, markers } = this.state;
    return (
      <div>
        {/* <NavBar /> */}
        <CustomMap center={[lat, lng]} markers={markers} />
      </div>
    );
  }
}
