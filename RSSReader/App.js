/**
 * 2. App.js
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import FeedsList from './src/screens/FeedsList.js';

const AppNavigator = createStackNavigator({
  FeedsList: { screen: FeedsList },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}