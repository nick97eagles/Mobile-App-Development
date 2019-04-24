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
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    this.props.fetchImages(this.props.user)
    .then(images => this.setState({ images }));
  }

  render() {
    return (
      <View>
        <View style={styles.imageContainer}>
          {
            this.state.images && 
            this.state.images.map(img => {
              return (
                <Image 
                  style={styles.image} 
                  key={img.id} 
                  source={{uri: img.src}}
                />
              );
            })
          }
        </View>
        {
          !this.state.images &&
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