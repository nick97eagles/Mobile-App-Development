/*
 * 1. src/screens/Login.js
 */

import React from 'react'
import {
  ScrollView,
  TextInput,
  Button,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

class Login extends React.Component {
  onLogin(email, password) {
    console.log(email, password);
  }

  onPressRegister(email, password, name) {
    console.log(email, password, name);
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{padding: 20, marginTop: 20, backgroundColor: '#eee'}}
      >
        <Icon
          name="comments"
          size={60}
          color='#ccc'
          style={{alignSelf: 'center', paddingBottom: 20}}
        />
        <View
          style={{alignItems: 'center', marginBottom: 20}}
        >
          <Text>- please, login to continue -</Text>
        </View>
        <LoginForm
          onPress={this.onLogin.bind(this)}
          busy={false}
          loggingError={false}
        />
        <View
          style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}
        >
          <Text>- or register -</Text>
        </View>
        <RegistrationForm
          onPress={this.onPressRegister.bind(this)}
          busy={false}
          registeringError={false}
        />
      </KeyboardAwareScrollView>
    )
  }
}

export default Login;