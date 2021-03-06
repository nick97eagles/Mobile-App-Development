// 1. src/components/StartAgain.js

import React, { Component } from "react";
// import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Image } from "react-native";

import { W, H } from "../constants";

export default class StartAgain extends Component {
  render() {
    return (
      <Image
        style={{ position: "absolute", left: 40 * W, top: 40 * H }}
        resizeMode="contain"
        source={require("../../images/reset.png")}
      />
    );
  }
}