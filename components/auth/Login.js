import React, { Component } from "react";
import {  Text, TextInput, View, Button, StyleSheet } from 'react-native';

import * as firebase from 'firebase';

export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }
 handleLogin = () => {
   console.log(this.state.email)
   firebase
     .auth()
     .signInWithEmailAndPassword(this.state.email, this.state.password)
     .then(() => this.props.navigation.navigate('Home'))
     .catch(error => this.setState({ errorMessage: error.message }))
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#000258', fontSize: 40}}>Login</Text>
       
        <TextInput style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText  = { email => this.setState({ email: email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText = { password => this.setState({ password: password })}
          value={this.state.password}
        />

          {this.state.errorMessage &&
          <Text style={{ color: 'red', marginBottom: 20 }}>
            {this.state.errorMessage}
          </Text>}

        <Button title="Login" color="#000258" onPress = {this.handleLogin} />
        <View>
        {/* <Text> Don't have an account? <Text onPress = {() => this.props.navigation.navigate('SignUp')} style={{color:'#e93766', fontSize: 18}}> Sign Up </Text></Text> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    fontSize:15,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15
  }
});