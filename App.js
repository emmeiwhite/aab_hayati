import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from './app/views/Home';
import Contact from './app/views/Contact'; // For Route Configuration



export default class App extends Component{
  render() {
    return (
      <Home />
    );
  }

}

