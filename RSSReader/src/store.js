/*
 * 8. src/store.js
 */

import { AsyncStorage } from 'react-native';
import { decorate, observable } from "mobx";

class Store {
  constructor() {
    this.feeds = [{
      "title": "reddit: the front page of the internet",
      "url": "http://www.reddit.com/.rss"
    }];
    AsyncStorage.getItem('@feeds')
    .then((sFeeds)=>{
      this.feeds = JSON.parse(sFeeds) || this.feeds;
      console.log("We read " + this.feeds.length + " feeds from AsyncStorage");
    });
  }

  _persistFeeds() {
    AsyncStorage.setItem('@feeds', JSON.stringify(this.feeds));
  }

  addFeed(url, feed) {
    this.feeds.push({
      url,
      entry: feed.entry,
      title: feed.title,
      updated: feed.updated,
    });
    this._persistFeeds();
    console.log("We now have " + this.feeds.length + " feeds!");
  }

  selectEntry(entry) {
    this.selectedEntry = entry;
  }

  removeFeed(url) {
    this.feeds = this.feeds.filter(f => f.url != url);
    this._persistFeeds();
  }

  selectFeed(feed) {
    this.selectedFeed = feed;
  }
}

decorate(Store, { feeds: observable });

const store = new Store()
export default store