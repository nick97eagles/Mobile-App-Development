/*
 * 2. App.js
 */

import React from 'react';
import { Platform, View } from 'react-native';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import Login from './src/screens/Login';
import Chats from './src/screens/Chats';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';

const screens = {
    Chats:   { screen: Chats   },
    Search:  { screen: Search  },
    Profile: { screen: Profile }
};
let Stack;
if(Platform.OS === 'ios') {
  const options = {
    tabBarOptions: {
      inactiveTintColor: '#aaa',
      activeTintColor:   '#000',
      showLabel: 	 true
    }
  };
  Stack = createBottomTabNavigator(screens, options);
} else {
  Stack = createDrawerNavigator(screens);
}

const Navigator = createAppContainer(Stack);

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return <Navigator/>
  }
}