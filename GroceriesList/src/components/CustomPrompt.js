import React from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default CustomPrompt = (props) => {
  return (
    <Modal
      visible={props.openPrompt}
      animationType={'slide'}
      onRequestClose={() => props.closePrompt()}
      transparent
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(49, 49, 49, 0.5)' }}>
        <View style={{ flex: 1 }} />
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            borderRadius: 5
          }}
        >
            <Text style={{ textAlign: 'center', padding: 5, fontSize: 16 }}> Enter Product </Text>
            <View>
              <TextInput
                onChangeText={(text) => props.setText(text)}
                value={props.text}
                multiline={false}
                style={{ padding: 10, borderWidth: 1, borderColor: 'black', margin: 10 }}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => props.closePrompt()}>
                  <View>
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 16 }}> Cancel </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => props.addProduct()}>
                  <View>
                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 16 }}> OK </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </Modal>
  );
}