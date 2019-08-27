
import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';


import { Appbar, TextInput   } from 'react-native-paper';





export default class HomeScreen extends React.Component {
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

               
                </Appbar.Header>
                    <Text>Home page is not implement yet!</Text>
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