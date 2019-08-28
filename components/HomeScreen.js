
import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';


import { Appbar, Button } from 'react-native-paper';


import * as firebase from 'firebase';


export default class HomeScreen extends React.Component {
    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigate.navigate('Login');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <View >
                <Appbar.Header>
                    <Appbar.Content
                        title="Home"
                        color="#ffffff"
                        titleStyle={{textAlign: 'left'}}
                        subtitleStyle={{textAlign: 'left'}}
                    />
                     {/* <Appbar.Action icon="user" onPress={() => this.signOutUser()} /> */}
                </Appbar.Header>
                    <Text style={{textAlign: 'center', marginTop:20}}>Logged User: {firebase.auth().currentUser.email}</Text>
                    <Button onPress={() => this.signOutUser()} mode="contained" style={{margin:20}}>Log out</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});