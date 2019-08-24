import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import BatchInspectionScreen from './components/BatchInspectionScreen';
import InspectionScreen from './components/InspectionScreen';
import SearchAssetsScreen from './components/SearchAssetsScreen';
import ScanScreen from './components/ScanScreen';
import ScanButton from './components/ScanButton';
import HomeScreen from './components/HomeScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';



const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-home" color={tintColor} size={25} />
      )
    }
  },

  Inspection: {
    screen: InspectionScreen, navigationOptions: {
      tabBarLabel: 'Inspection',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-barcode" color={tintColor} size={25} />
      )
    }
  },

  Scan: {
    screen: () => null,
    tabBarLabel: '',
    navigationOptions: () => ({
      tabBarIcon: <ScanButton />
    })
  },


  BatchInspection: {
    screen: BatchInspectionScreen,
    navigationOptions: {
      tabBarLabel: 'Batch Inspection',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-list-box" color={tintColor} size={25} />
      )
    }
  },


  Search: {
    screen: SearchAssetsScreen,
    navigationOptions: {
      tabBarLabel: 'Search Assets',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-search" color={tintColor} size={25} />
      )
    }
  },

  // Settings: {
  //   screen: SearchAssetsScreen, navigationOptions: {
  //     tabBarLabel: 'Settings',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Ionicons name="md-settings" color={tintColor} size={25} />
  //     )
  //   }
  // },
},
  {
    initialRouteName: "Home",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#000258'
      },
      tabStyle: {}
    },
  },

);

const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: 'medium',
  colors: {
    ...DefaultTheme.colors,
    primary: '#000258',
    accent: '#78bb00',
  },
};

const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer/>
        </PaperProvider>
      )  
  }

}

export default App;


//export default createAppContainer(TabNavigator);