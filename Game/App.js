// 2. App.js

import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import gameReducer from "./src/reducers/game";
import GameContainer from "./src/components/GameContainer";

let store = createStore(combineReducers({ gameReducer }));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );
  }
}