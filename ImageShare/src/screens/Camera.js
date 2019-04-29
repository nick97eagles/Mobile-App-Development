/*
 * 5. src/screens/Camera.js
 */

import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { RNCamera } from 'react-native-camera';

// remove import Header

type Props = {};
export default class Camera extends Component<Props> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='camera' style={{fontSize: 40, color: tintColor}}/>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={ false }
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        >
          <Button
            onPress={ this.takePicture }
            style={{ flex: 0, alignSelf: 'center' }}
            transparent
          >
            <Icon
              name='camera'
              style={{ fontSize: 70, color: 'white' }}
            />
          </Button>
        </RNCamera>
        <Button
          onPress={() => this.props.navigation.navigate('ImagesList')}
          style={{ position: 'absolute', top:20 }}
          transparent
        >
          <Icon
            ios='ios-arrow-dropleft'
            android='md-arrow-dropleft'
            style={{ fontSize: 30, color: 'white' }}
          />
        </Button>
      </View>
    );
  }

  takePicture = async () => {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log(data);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});