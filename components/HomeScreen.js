
import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';


import { Appbar, TextInput   } from 'react-native-paper';





export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content
                        title="Home"
                        subtitle="Not implemented yet"
                        color="#ffffff"
                        titleStyle={{textAlign: 'center'}}
                        subtitleStyle={{textAlign: 'center'}}
                    />
                </Appbar.Header>
                <TextInput
        label='Email'
        onChangeText={text => this.setState({ text })}
      />
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