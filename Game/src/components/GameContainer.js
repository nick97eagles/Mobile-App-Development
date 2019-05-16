// 1. src/components/GameContainer.js

import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import { W, H } from "../constants";
import Score from "./Score";
import Start from "./Start";
import StartAgain from "./StartAgain";
import GameOver from "./GameOver";

// these lines will move to sprites.js eventually
import Sound from "react-native-sound";
var coinSound = new Sound('coin.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('loaded sound with duration in seconds: ' + coinSound.getDuration());
});

class Game extends Component {
  start = () => {
    console.log("start");
    coinSound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  render() {
    const isStarted = false;
    const gameOver = false;
    const score = 0;
    return (
      <TouchableOpacity
        onPress = { this.start }
        style={styles.screen}
        activeOpacity={1}
      >
        <Image
          source={require("../../images/bg.png")}
          style={[styles.screen, styles.image]}
        />
        <Score score={score} />
        {!isStarted && <Start />}
        {gameOver && <GameOver />}
        {gameOver && isStarted && <StartAgain />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: "stretch",
    width: null
  },
  image: {
    resizeMode: "cover"
  }
});

export default Game;