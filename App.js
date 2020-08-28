import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './screens/welcomeScreen';

export default class App extends React.Component {
  render(){
  return (
    <WelcomeScreen/>
  );
}
}

