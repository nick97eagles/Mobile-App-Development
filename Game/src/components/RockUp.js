// 3. src/components/RockUp.js

import React, { Component } from "react";
import { Image } from "react-native";

import { W, H } from "../constants";

export default class RockUp extends Component {
  render() {
    return (
      <Image
        resizeMode="stretch"
        source={require("../../images/rock-down.png")}
        style={{
          position: "absolute",
          left: this.props.x,
          top: this.props.y,
          width: this.props.width * W,
          height: this.props.height * H
        }}
      />
    );
  }
}