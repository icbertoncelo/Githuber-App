import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

import styles from './styles';

class Welcome extends Component {
  state = {
    username: '',
  };

  render() {
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>Enter your Github username to continue</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Type your username"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
