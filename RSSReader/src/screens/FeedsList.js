/**
 * 2. src/screens/FeedsList.js
 */

import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class FeedsList extends React.Component {
  static navigationOptions = props => ({
    title: 'My Feeds',
  });

  render() {
    return (
      <Container>
          <Content>
              <List>
                <ListItem>
                  <Text>reddit</Text>
                </ListItem>
              </List>
          </Content>
      </Container>
    )
  }
}