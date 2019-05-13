/*
 * 5. App.js
 */

import React from 'react';
import { Platform, View } from 'react-native';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import { Provider, observer, inject } from 'mobx-react';

import Login from './src/screens/Login';
import Chats from './src/screens/Chats';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { users, chats } from './src/stores';

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
@inject('users', 'chats')
@observer
class MessagingApp extends React.Component<Props> {
  render() {
    if(this.props.users.isLoggedIn) {
      return <Navigator/>
    } else {
      return <Login/>
    }
  }
}

export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider users={users} chats={chats}>
        <MessagingApp/>
      </Provider>
    )
  }
}