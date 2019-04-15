/**
 * 7. src/screens/AddFeed.js
 */

import React from 'react';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import { addFeed, fetchFeed } from '../actions'
import { Alert, ActivityIndicator } from 'react-native';

export default class AddFeed extends React.Component {
  static navigationOptions = {
    title: 'Add feed'
  }

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      loading: false
    };
  }

  _handleAddPress() {

    /**
     * checks to make sure url has http:// infront 
     * code snippet taken from https://stackoverflow.com/questions/3543187/prepending-http-to-a-url-that-doesnt-already-contain-http
     */
    if(!this.state.url.match(/^[a-zA-Z]+:\/\//)){
      this.state.url = 'http://' + this.state.url;
    }
    // console.log(this.state.url);

    if(this.state.url.length > 0) {
      this.setState({ loading: true });
      fetchFeed(this.state.url)
        .then((feed)=>{
            addFeed(this.state.url, feed);
            this.setState({ loading: false });
            this.props.navigation.goBack();
            
        })
        .catch((err)=>{
          // added more information about error
          alert('ERROR:' + err.message + '. URL issue. Please try again or check URL validity');
          this.setState({ loading: false });
        });
    }
  }

  render() {
    return (
      <Container style={{padding: 10}}>
          <Content>
              <Form>
                  <Item>
                      <Input
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="feed's url"
                        onChangeText={(url) => this.setState({url})} />
                  </Item>
                  <Button
                    block
                    style={{marginTop: 20}}
                    onPress={this._handleAddPress.bind(this)}
                  >
                    { this.state.loading &&
                      <ActivityIndicator color='white' style={{margin: 10}}
                      />
                    }
                    <Text>Add</Text>
                  </Button>
              </Form>
          </Content>
      </Container>
    );
  }
}