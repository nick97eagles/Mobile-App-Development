/*
 * 2. src/screens/Search.js
 */

import React, { PropTypes } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Search extends React.Component {
  imgPlaceholder = 'https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png';

  state = {
    name: '',
    foundUsers: null
  }

  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" size={30} color={tintColor}/>
    )
  };

  onPressSearch() {
    console.log(this.state.name);
  }

  render () {
    return (
      <View>
        <View style={{padding: 20, marginTop: 20, backgroundColor: '#eee'}}>
          <View style={{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
            <TextInput
              style={{borderColor: 'gray', borderBottomWidth: 1, height: 40}}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
              placeholder='Name of user'
            />
            <Button
              onPress={this.onPressSearch.bind(this)}
              title='Search'
            />
          </View>
        </View>
        {
        }
      </View>
    )
  }
}

export default Search;