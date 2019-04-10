/**
 * 2. src/screens/FeedsList.js
 */

import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { selectFeed } from '../actions';

export default class FeedsList extends React.Component {
  static navigationOptions = props => ({
    title: 'My Feeds',
  });

  _handleFeedPress(feed) {
      selectFeed(feed);
    this.props.navigation.navigate('FeedDetail', { feedUrl: feed.url });
  }

  render() {
      const { feeds } = this.props.screenProps.store;
    return (
      <Container>
          <Content>
              <List>
                {feeds && feeds.map((f, i) => {
                    return (
                        <ListItem key={i} onPress=
                            {this._handleFeedPress.bind(this, f)}>
                            <Text>{f.title}</Text>
                        </ListItem>
                    );
                    })}
              </List>
          </Content>
      </Container>
    )
  }
}