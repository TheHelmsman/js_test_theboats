import React, {Component, Fragment} from "react";
import LoginForm from './components/LoginForm';
import CustomMap from "./components/CustomMap";
import i18n from "./i18n";

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

  getUserLocation = () => {
    var that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        that.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 13,
          markers: [
            {
              key: "marker1",
              position: [position.coords.latitude, position.coords.longitude],
              children: i18n.t('marker')
            }
          ]
        })
      }, function() {
        console.log(i18n.t('geoDiscovery'));
      });
    } else {
      console.log(i18n.t('geoSupport'));
    }
  }

  componentDidMount = () => {
    this.getUserLocation();
  }

  render() {
    const { lat, lng, markers } = this.state;
    return (
      <div>
        <Fragment>
          <LoginForm />
        </Fragment>
        <CustomMap center={[lat, lng]} markers={markers} />
      </div>
    );
  }
}

