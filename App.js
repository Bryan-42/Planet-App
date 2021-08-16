import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './Screens/home';
import DetailScreen from './Screens/details';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

export default function App() {
  return <AppContainer/>
}

const appStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Details:{
    screen:DetailScreen,
  }
},{
  initalRouteName:'home'
}
)

const AppContainer = createAppContainer(appStackNavigator)