/*
 * GroceriesList/App.js
 *
*/

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ShoppingList from './src/screens/ShoppingList.js';
import AddProduct from './src/screens/AddProduct.js';

const Navigator = createStackNavigator({
  ShoppingList: { screen: ShoppingList },
  AddProduct: {screen: AddProduct}
});

const App = createAppContainer(Navigator);

export default App;