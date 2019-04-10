/*
 * 6. src/store.js
 */

import {AsyncStorage} from 'react-native';

class Store {
  constructor() {
    this.feeds = [{
      "title": "reddit: the front page of the internet",
      "url": "http://www.reddit.com/.rss"
    }];
    AsyncStorage.getItem('@feeds')
    .then((sFeeds)=>{
      this.feeds = JSON.parse(sFeeds) || this.feeds;
    });
  }

  _persistFeeds() {
    AsyncStorage.setItem('@feeds', JSON.stringify(this.feeds));
  }

  selectEntry(entry) {
    this.selectedEntry = entry;
  }

  selectFeed(feed) {
    this.selectedFeed = feed;
  }
}

const store = new Store()
export default store