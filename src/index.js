import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Main Structure</Text>
  </View>
);

export default App;
