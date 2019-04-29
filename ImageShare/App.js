/*
 * 6. App.js
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { 
  createBottomTabNavigator, 
  createDrawerNavigator, 
  createAppContainer 
} from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import imagesReducer from './src/reducers/images';

import Camera     from "./src/screens/Camera"
import ImagesList from "./src/screens/ImagesList"
import MyImages   from "./src/screens/MyImages"

const screens = {
  ImagesList: { screen: ImagesList },
  MyImages:   { screen: MyImages   },
  Camera:     { screen: Camera     }
};
let Stack;
if(Platform.OS === 'ios') {
  const options = {
    tabBarOptions: {
      inactiveTintColor: '#aaa',
      activeTintColor:   '#000',
      showLabel: 	 false
    }
  };
  Stack = createBottomTabNavigator(screens, options);
} else {
  Stack = createDrawerNavigator(screens);
}

const Navigator = createAppContainer(Stack);

let store = createStore(combineReducers({ imagesReducer }), applyMiddleware(thunk));

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }
}