/**
 * 2. App.js
 */

import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} />
      </View>
    );
  }
}