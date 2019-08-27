
import React from 'react';
import { View , Picker, Text,  StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, FAB } from 'react-native-paper';

export default class BatchInspectionScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


    render() {
      
      return (
        <View >
        <Appbar.Header>
            <Appbar.Content
                title="Batch Inspection"
                color="#ffffff"
                titleStyle={{textAlign: 'left'}}
                subtitleStyle={{textAlign: 'left'}}
            />

       
        </Appbar.Header>
            <Text>Batch Inspection is not implement yet!</Text>
    </View>
      );
    }
}