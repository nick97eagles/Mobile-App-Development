/*
 * 3. src/screens/ImagesList.js
 */

import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon } from 'native-base';

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import api from '../api';    // importing a directory looks for 'index.js' 

type Props = {};
export default class ImagesList extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'All Images',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='list' style={{ fontSize: 40, color: tintColor }}/>
    ),
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header 
          onMenuButtonPress={() => {
            this.props.navigation.openDrawer();
          }} 
          onCameraButtonPress={() => {
            this.props.navigation.navigate('Camera');
          }}
        />
        { /* remove <Text> element */ }
        <ScrollView>
          <Gallery 
            fetchImages={ api.fetchImages }
          />
        </ScrollView>
      </View>
    );
  }
}

/* remove styles */