import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import * as firebase from 'firebase';

export default class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Home' : 'Login')
    })
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#000258', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#000258' size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});