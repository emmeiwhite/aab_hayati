import React,{Component} from 'react';
import {StyleSheet,Image} from 'react-native';


export default class Hero extends Component{
    render(){
        return(     
            <Image 
                style={styles.heroImage}
                source={ require('./images/person5.jpg') }
            />
        )
    }
}

const styles = StyleSheet.create({
    heroImage:{
        flex:8,
        height:undefined,
        width:undefined
    }
})