/**
 * 10. App.js
 */

import React from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import GeoCoder from 'react-native-geocoder';

import ConfirmationModal from './src/components/ConfirmationModal';
import LocationPin from './src/components/LocationPin';
import LocationSearch from './src/components/LocationSearch';
import ClassSelection from './src/components/ClassSelection';

type Props = {};
export default class App extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModalVisible: false,
      position: null,
      carLocations: [{
        rotation: 79,
        latitude: 42.415114,
        longitude: -71.682174
      },
      {
      	rotation: 83,
        latitude: 42.417617,
        longitude: -71.684728
      },{
      	rotation: 8,
        latitude: 42.418060,
        longitude: -71.680479
      }]
    };
    this.llu = {
      latitude:    34.049434,
      longitude: -117.264123,
      latitudeDelta:  0.00922,
      longitudeDelta: 0.00421
    };
    this.rog = {
      latitude: 51.4875,
      longitude: 0.0001,
      latitudeDelta:  0.0922,
      longitudeDelta: 0.0421
    };
    this.sfo = {
      latitude:    37.788250,
      longitude: -122.432400,
      latitudeDelta:  0.00922,
      longitudeDelta: 0.00421
    };
    this.wwu = {
      latitude:    46.046109,
      longitude: -118.390226,
      latitudeDelta:  0.00922,
      longitudeDelta: 0.00421
    };
    this.hometown = {
      latitude:   42.416759,
      longitude:  -71.6828468,
      latitudeDelta:  0.00922,
      longitudeDelta: 0.00421
    }
  }

  _newEvent = () => {
    this.setState({ position: null });
    if(this.timeoutId) clearTimeout(this.timeoutId);
  }

  _onRegionChange = (region) => {
    this._newEvent
    
    const self = this;
    this.timeoutId = setTimeout(async function() {
      try {
        const point = { lat: region.latitude, lng: region.longitude };
        const positions = await GeoCoder.geocodePosition(point);
        self.setState({ position: positions[0] });
        
      } catch (err) {
        console.log(err)
      }
    }, 2000);
  }

  _onBookingRequest = () => {
    this.setState({
      confirmationModalVisible: true
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
        style={styles.fullScreenMap}
        initialRegion={ this.hometown }
        onRegionChangeComplete={ this._onRegionChange }
         >
         {this.state.carLocations.map((carLocation, i) => (
           <MapView.Marker
             key={i}
             coordinate={carLocation}
           >
             <Animated.Image 
               style={[styles.car, {transform: [{ rotate: `${carLocation.rotation}deg` }]}]} 
               source={require('./img/car.png')} 
             />
           </MapView.Marker>
           ))}
         </MapView>
        <LocationSearch 
          value={
            this.state.position && 
            (this.state.position.feature || this.state.position.formattedAddress)
          }
        />
        <LocationPin onPress={ this._onBookingRequest }/>
        <ClassSelection/>
        <ConfirmationModal 
          visible={this.state.confirmationModalVisible} 
          onClose={()=>{this.setState({confirmationModalVisible: false})}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullScreenMap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  car: {

  },
});