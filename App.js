import React,{Component} from 'react';
// import {createStackNavigator} from 'react-navigation'; We'll use react-native-router-flux instead

import { Scene, Router,Actions } from 'react-native-router-flux';

import Home from './app/views/Home';
import Books from './app/views/Books';
import Contact from './app/views/Contact';



export default class App extends Component{
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene 
                key="home"
                component={Home}
                title="Home"
                initial
              />

              <Scene 
                key="contact"
                component={Contact}
                title="Contact"
              />

              <Scene 
                key="books"
                component={Books}
                title="Books"
              />
          </Scene>
      </Router>
    );
  }

}



