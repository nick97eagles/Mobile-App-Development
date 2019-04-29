/*
 * 4. src/components/ImagesGrid.js
 *
 * props: fetchImages(), user
 *
 */

import React from 'react';
import { 
  ActivityIndicator, 
  Image,
  TouchableOpacity, 
  ScrollView, 
  Dimensions, 
  View,
  StyleSheet
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class ImagesGrid extends React.Component {
  // remove constructor() and componentDidMount()

  render() {
    return (
      <View>
        <View style={styles.imageContainer}>
          {
            this.props.imageList && this.props.imageList.map((image) => {
              return (
                <Image 
                  style={styles.image} 
                  key={image.id} 
                  source={{uri: image.src}}
                />
              );
            })
          }
        </View>
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
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  image: {
    width: (width/3 - 2),
    margin: 1,
    height: (width/3 - 2),
    resizeMode: 'cover'
  },
  spinnerContainer: {
    justifyContent: 'center',
    height: (height - 50)
  },
});