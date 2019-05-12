/*
 * 2. src/screens/Chats.js
 */

import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChatList extends React.Component {
  imgPlaceholder = 'https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png';

  render () {
    return (
      <View>
        {
          <ActivityIndicator style={{marginTop: 20}}/>
        }
      </View>
    )
  }
}

export default createStackNavigator({
  Chats: {
    screen: ChatList,
    navigationOptions: ({navigation}) => ({
      title: 'Chats',
      tabBarLabel: 'Chats',
      tabBarIcon: ({ tintColor }) => (
        <icon name="comment-o" size={ 30 } color={ tintColor }/>
      )
    }),
  },
});