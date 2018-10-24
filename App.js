
import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import ImagesExample from /ImagesExample.js/ ;

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View style={{padding: 50, alignSelf: 'flex-start'}}>
        
        <ImagesExample />
        
      </View>
    );
  }
}