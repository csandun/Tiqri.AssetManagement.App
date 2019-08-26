import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class AssetDetailsScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.navigation.state.params.something}}</Text>
      </View>
    );
  }
}