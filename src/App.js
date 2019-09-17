import React, {Component, Fragment} from "react";
import LoginForm from './components/LoginForm';
import CustomMap from "./components/CustomMap";

export default class App extends Component {

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
    console.log('---App, componentDidMount');
    console.log(this.state);
    //  get  user location
    this.getUserLocation();
  }

  render() {
    const { lat, lng, markers } = this.state;
    return (
      <div>
        <Fragment>
          <h1>Redux Form</h1>
          <LoginForm />
        </Fragment>
        <CustomMap center={[lat, lng]} markers={markers} />
      </div>
    );
  }
}
