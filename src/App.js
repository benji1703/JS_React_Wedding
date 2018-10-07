import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Map google={this.props.google} zoom={14}>

              <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>

              </InfoWindow>
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyC4Kbb_4IwSPtb5LQi0d0oljGDZFXifjwk")
})(App)
