/*
 * 4. src/screens/MyImages.js
 */

import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon } from 'native-base';

import Header from '../components/Header';
import ImagesGrid from '../components/ImagesGrid';
import api from '../api';    // importing a directory gives us index.js

type Props = {};
export default class MyImages extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'My Images',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' style={{fontSize: 40, color: tintColor}}/>
    )
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
        { /* remove <Text> element */ }
        <ScrollView>
          <ImagesGrid 
            fetchImages={ api.fetchImages } 
            user='Gabriela'
          />
        </ScrollView>
      </View>
    );
  }
}

// remove styles