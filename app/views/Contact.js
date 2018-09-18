import React, {Component} from 'react';
import { StyleSheet,Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class App extends Component {
  static navigationOptions = {
    header:null
  }

  render() {
    return (
      <View style={styles.appContainer}>
            <Text>In the Contact Page!!!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  appContainer:{
    flex:1 //By default flex-direction is column in react-native
  }
})
