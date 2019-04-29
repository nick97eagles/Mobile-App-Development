/*
 * 6. src/screens/ImagesList.js
 *
 * props: fetchImages(), navigation, images, fetchingImages 
 */

import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon } from 'native-base';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import api from '../api';    // importing a directory looks for 'index.js' 

type Props = {};
class ImagesList extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'All Images',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='list' style={{ fontSize: 40, color: tintColor }}/>
    ),
  };

  componentWillMount() {
    this.props.fetchImages();
  }

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
            imageList={ this.props.images }
            loading={ this.props.fetchingImages }
          />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) { 
  return { 
    images: state.imagesReducer.images, 
    addingImage: state.imagesReducer.addingImage, 
    fetchingImages: state.imagesReducer.fetchingImages 
  } 
}
function mapStateActionsToProps(dispatch) { 
  return bindActionCreators(Actions, dispatch) 
}

export default connect(mapStateToProps, mapStateActionsToProps)(ImagesList);
