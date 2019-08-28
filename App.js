import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,  
  createSwitchNavigator,
  TabNavigator

} from 'react-navigation';

import BatchInspectionScreen from './components/BatchInspectionScreen';
import InspectionScreen from './components/InspectionScreen';
import SearchAssetsScreen from './components/SearchAssetsScreen';
import ScanScreen from './components/ScanScreen';
import ScanButton from './components/ScanButton';
import HomeScreen from './components/HomeScreen';
import AssetDetailsScreen from './components/AssetDetailsScreen';
import SettingsScrean from './components/SettingsScreen';

import * as firebase from 'firebase';
import Icon from '@expo/vector-icons/FontAwesome';


import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Home from './components/auth/Home';
import Loading from './components/auth/Loading';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';


var firebaseConfig = {
  apiKey: "AIzaSyAxnJTiYEnFrj_5UQWMUNvENDksbF3At3A",
  authDomain: "tiqri-asset-management.firebaseapp.com",
  databaseURL: "https://tiqri-asset-management.firebaseio.com",
  projectId: "tiqri-asset-management",
  storageBucket: "",
  messagingSenderId: "238881156073",
  appId: "1:238881156073:web:25315ac9dab6e1b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;
app = {
  visible: true
} || app;

const scanStack = createStackNavigator({
  ScanScreen: ScanScreen,
  DetailScreen: AssetDetailsScreen
},
  {
    initialRouteName: "ScanScreen",
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#000258',
        fonts: 'thin'
      },
      headerTintColor: '#FFFFFF',
      title: 'Asset Details',
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        app.visible = true;
        app.stackRouteName = routeName;
        console.log('routename ' + routeName);
        if (routeName === 'DetailScreen') {
          app.visible = false;
        } else {
          app.visible = true;
        }
      },
    }
  });
  


const tabNavigator = createBottomTabNavigator({
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
    screen: InspectionScreen,
    navigationOptions: {
      tabBarLabel: 'Inspection',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-barcode" color={tintColor} size={25} />
      )
    }
  },

  
  Scan: {
    screen: scanStack,
    tabBarLabel: '',
    navigationOptions: {
      tabBarLabel: 'Scan',
      activeTintColor: '#000258',
      tabBarIcon: ({ tintColor }) => (
        // <Ionicons name="qrcode" color={tintColor} size={25} />
        <View style={{backgroundColor: '#78bb00', width: 50,
        height: 60,
        borderRadius: 60/2, flex:1, justifyContent: 'center',
        alignItems: 'center'}} >
          <Icon name="qrcode"  size={24} color="#F8F8F8" />
        </View>
      )
    }
  },


  BatchInspection: {
    screen: BatchInspectionScreen,
    navigationOptions: {      
      tabBarLabel: 'Batch Inspection',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-list-box" color={tintColor} size={25} />
      ),
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
      activeTintColor: '#78bb00',
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#000258'
      },
      tabStyle: {}
    },
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarVisible: app.visible
      }
    },
  }

);


const navigator = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Home: {
      screen: tabNavigator
    }
  },
  {
    initialRouteName: 'Loading'
  }
)









const theme = {
  ...DefaultTheme,
  roundness: 2,
  //fonts: 'medium',
  colors: {
    ...DefaultTheme.colors,
    primary: '#000258',
    accent: '#78bb00',
  },
};

const AppContainer = createAppContainer(navigator);

class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    )
  }

}

export default App;