import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

import Header from './../components/Header';
import Hero from './../components/Hero';
import Menu from './../components/Menu';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.appContainer}>
        <Header message="Click to Login In"  />
        <Hero />
        <Menu/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  appContainer:{
    flex:1 //By default flex-direction is column in react-native
  }
})