/**
 * 9. App.js
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import GeoCoder from 'react-native-geocoder';
import LocationSearch from './src/components/LocationSearch';

type Props = {};
export default class App extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
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
  }

  _onRegionChange = (region) => {
    this.setState({ position: null });
    if(this.timeoutId) clearTimeout(this.timeoutId);
    console.log(region);
    const self = this;
    this.timeoutId = setTimeout(async function() {
      try {
        const point = { lat: region.latitude, lng: region.longitude };
        const positions = await GeoCoder.geocodePosition(point);
        self.setState({ position: positions[0] });
        console.log(this, self);
      } catch (err) {
        console.log(err)
      }
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.fullScreenMap}
          initialRegion={ this.rog }
          onRegionChangeComplete={ this._onRegionChange }
        />
        <LocationSearch 
          value={
            this.state.position && 
            (this.state.position.feature || this.state.position.formattedAddress)
          }
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
});