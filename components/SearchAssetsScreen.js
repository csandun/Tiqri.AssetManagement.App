//This is an example code for Bottom Navigation//
import React from 'react';
import { Text, View } from 'react-native';
import { Appbar   } from 'react-native-paper';

export default class SearchAssetScrean extends React.Component {
  
  render() {
    return (
      <View >
                <Appbar.Header>
                    <Appbar.Content
                        title="Search Asset"
                        color="#ffffff"
                        titleStyle={{textAlign: 'left'}}
                        subtitleStyle={{textAlign: 'left'}}
                    />

               
                </Appbar.Header>
                    <Text>Search page is not implement yet!</Text>
            </View>
    );
  }
}