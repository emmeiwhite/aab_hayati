import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          isLogged:false
        }

        this.onInputClick = this.onInputClick.bind(this); 

    }

    // Note: We can use ES6 syntax, then we don't have to bind "this" scope in constructor
    onInputClick(){
        isLogged = this.state.isLogged;
        this.setState({
            isLogged:!isLogged
        })
    }

  render() {
    const display = this.state.isLogged? "User Logged In" : this.props.message
    return (
      <View style={styles.header}>
          
          <Text style={styles.textBrand}>
               EmmeiSoft
          </Text>

          <Text style={styles.textStyle} onPress={this.onInputClick}>{display}
          </Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'teal',
        paddingTop:30,
        paddingRight:10,
        paddingBottom:10,
        paddingLeft:10,       
    },
    textBrand:{
        color:'#ffffff',
        fontFamily:'monospace',
        fontWeight:'bold',
        fontSize:18,
        flex:1
        
    },
    textStyle:{
        color:'skyblue',
        flex:2,
        textAlign:'right',
        paddingTop:5
    }
})