import React, { Component } from 'react';
import { Animated, TouchableHighlight, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
const SIZE = 60;
class ScanButton extends Component {


    constructor(props){
        super(props)
        
    }

    mode = new Animated.Value(0);
    toggleView = () => {
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 ? 1 : 0,
            duration: 300
        }).start();
        console.log(JSON.stringify(this.props));

        //this.props.navigation.navigate('ScanScreen');
        debugger;
        console.log('clicked');
    };
    render() {
        
        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center'
            }}>                
                <TouchableHighlight
                     onPress = {
                        () => this.toggleView()}
                    underlayColor="#639c00"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 2,
                        backgroundColor: '#78bb00',
                        marginBottom:44
                        
                    }}
                >
                    <Animated.View style={{
                        transform: [
                            { rotate: rotation }
                        ]
                    }}>
                        <Icon name="qrcode" size={24} color="#F8F8F8" />
                    </Animated.View>
                </TouchableHighlight>
            </View>
        );
    }
}
export default ScanButton;