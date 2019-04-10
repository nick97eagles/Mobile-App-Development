/**
 * 6. App.js
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import FeedsList from './src/screens/FeedsList.js';
import FeedDetail from './src/screens/FeedDetail.js';
import EntryDetail from './src/screens/EntryDetail.js';

import store from './src/store'

const AppNavigator = createStackNavigator({
  FeedsList: { screen: FeedsList },
  FeedDetail: { screen: FeedDetail },
  EntryDetail: { screen: EntryDetail },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer screenProps={{ store }} />
    );
  }
}