/*
 * 6. src/components/Gallery.js
 *
 * props: fetchImages
 *
 */

import React from 'react';
import { 
  List, ListItem, Text, Icon, Button, Container, Content 
} from 'native-base';
import { 
  Image, Dimensions, View, Share, ActivityIndicator, StyleSheet 
} from 'react-native';

var { height, width } = Dimensions.get('window');

export default class Gallery extends React.Component {
  // remove constructor() and componentDidMount() 

  _share(image) {
    Share.share({ 
      message: image.src, 
      title: 'Image from: ' + image.user.name 
    }) 
  }

  render() {
    return (
      <View>
        <List style={{margin: -15}}>
          {
            this.props.imageList && this.props.imageList.map((image) => {
              return (
                <ListItem 
                  key={ image.id } 
                  style={ styles.listItem }>
                  <View style={ styles.user }>
                    <Image 
                      source={{ uri: image.user.pic }} 
                      style={ styles.userPic }
                    />
                    <Text 
                      style={ styles.userName }>
                      { image.user.name }
                    </Text>
                  </View>
                  <Image 
                    source={{ uri: image.src }} 
                    style={ styles.image }/>
                  <Button 
                    style={ styles.shareButton } 
                    transparent 
                    onPress={ this._share.bind(this, image) }
                  >
                    <Icon name='ios-more' style={ styles.shareIcon }/>
                  </Button>
                </ListItem>
              );
            })
          }
        </List>
        {
          this.props.loading &&
          <View style={ styles.spinnerContainer }>
            <ActivityIndicator/>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 0, 
    flexDirection: 'column', 
    marginBottom: -20
  },
  user: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 10
  },
  userName: {
    fontWeight: 'bold'
  },
  userPic: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 25
  },
  shareButton: {
    position: 'absolute', 
    right: 15, 
    top: 25
  },
  shareIcon: {
    fontSize: 20, 
    color: 'black'
  },
  image: {
    width: width,
    height: 300,
    resizeMode: 'cover'
  },
  spinnerContainer: {
    justifyContent: 'center',
    height: (height - 50)
  }
});