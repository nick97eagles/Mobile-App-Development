import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import transactions from './src/screens/transactions';

const Navigator = createStackNavigator({
  transactions: {screen: transactions }
});

const App = createAppContainer(Navigator);

export default App;