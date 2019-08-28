
import React from 'react';
import { Text, View,  StyleSheet , Button} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Appbar, TextInput   } from 'react-native-paper';


export default class InspectionScreen extends React.Component {
  ;



  render() {
   
    return (
      <View >
      <Appbar.Header>
          <Appbar.Content
              title="Inspection"
              color="#ffffff"
              titleStyle={{textAlign: 'left'}}
              subtitleStyle={{textAlign: 'left'}}
          />

     
      </Appbar.Header>
          <Text>Inspection is not implement yet!</Text>
  </View>
    );
  }


}

