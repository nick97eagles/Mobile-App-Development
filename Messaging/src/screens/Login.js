/*
 * 3. src/screens/Login.js
 */

import React from 'react'
import {
  ScrollView,
  TextInput,
  Button,
  Text,
  View,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { observer, inject } from 'mobx-react'

import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

@inject('users') 
@observer
class Login extends React.Component {
  onLogin = (email, password) => {
    this.props.users.login(email, password);
  }

  onPressRegister = (email, password, name) => {
    this.props.users.register(email, password, name);
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.keyboard}
      >
        <Icon
          name="comments"
          size={60}
          color='#ccc'
          style={styles.icon}
        />
        <View
          style={styles.imageContainer}
        >
          <Text>- please, login to continue -</Text>
        </View>
        <LoginForm
          onPress={this.onLogin}
          busy={this.props.users.loggingIn}
          loggingError={this.props.users.loggingError}
        />
        <View
          style={styles.imageContainer2}
        >
          <Text>- or register -</Text>
        </View>
        <RegistrationForm
          onPress={this.onPressRegister}
          busy={this.props.users.registering}
          registeringError={this.props.users.registeringError}
        />
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  keyboard: {
    padding: 20,
    marginTop: 20, 
    backgroundColor: '#eee'
  },
  icon: {
    alignSelf: 'center',
    paddingBottom: 20
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  imageContainer2: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});

export default Login;