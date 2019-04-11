/**
 * 8. src/screens/FeedsList.js
 */

import React from 'react';
import { Container, Content, List, ListItem, Text, Button, Icon } from 'native-base';
import { selectFeed } from '../actions';
import { observer } from 'mobx-react';

export default observer(class FeedsList extends React.Component {
  static navigationOptions = props => ({
    title: 'My Feeds',
    headerRight: (
      <Button transparent onPress={() =>
       props.navigation.navigate('AddFeed')}>
        <Icon name="add" />
      </Button>
    ),
  });

  _handleFeedPress(feed) {
    selectFeed(feed);
    this.props.navigation.navigate('FeedDetail', { feedUrl: feed.url });
  }

  render() {
    const { feeds } = this.props.screenProps.store;
    console.log("We found " + feeds.length + " feeds in store.feeds");
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
})