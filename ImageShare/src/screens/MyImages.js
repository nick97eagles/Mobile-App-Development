/*
 * 2. src/screens/MyImages.js
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

import Header from '../components/Header';

type Props = {};
export default class MyImages extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'My Images',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' style={{fontSize: 40, color: tintColor}} />
    ),
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Header 
          onMenuButtonPress={() => {
            this.props.navigation.openDrawer();
          }} 
          onCameraButtonPress={() => {
            this.props.navigation.navigate('Camera');
          }}
        />
        <Text style={styles.title}>MyImages</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});