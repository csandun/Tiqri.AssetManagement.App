
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Searchbar } from 'react-native-paper';

export default class ScanScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };



  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    const { firstQuery } = this.state;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#000000'
        }}>

        <Searchbar
          placeholder="Search"
          onChangeText={query => { this.setState({ firstQuery: query }); }}
          value={firstQuery}
          style={{ margin: 10 }}
        />
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />

        {scanned && (
          <Button title={'Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(JSON.stringify(this.props.navigation));
    // check availability
    fetch('https://tiqriassetmanagement20190826101850.azurewebsites.net/api/assets?assetId=' + data)
    .then((response) => {      
      response.json()
    })
      .then((responseJson) => {
        console.log('json');
        console.log(responseJson);
        if (responseJson !== null) {
          this.props.navigation.navigate('DetailScreen', { asset: responseJson, isExist: true });
        } else {
          this.props.navigation.navigate('DetailScreen', {
            asset: {
              assetId: data
            },
            isExist: false
          });
        }

      })
      .catch((error) => {
        console.log("api error" + error);
        alert(error.message);
      });
  };

}