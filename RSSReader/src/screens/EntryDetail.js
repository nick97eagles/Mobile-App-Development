/**
 * 6. src/screens/EntryDetail.js
 */

import React from 'react';
import { Container, Content } from 'native-base';
import { WebView } from 'react-native-webview';

export default class EntryDetail extends React.Component {
  render() {
    const entry = this.props.screenProps.store.selectedEntry;
    return <WebView source={{uri: (entry.link.href || entry.link)}}/>
  }
}