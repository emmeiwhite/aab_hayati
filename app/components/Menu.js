import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Menu extends Component{
    render(){
        return(     
            <View style={styles.container}>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel} onPress={()=>Actions.books()}>BOOKS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel}>BLOG</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel} onPress={()=>Actions.contact()}>CONTACT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel}>PLAY</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel}>HELP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:6,
        backgroundColor:'teal',
    },
    buttonRow:{
        flex:2,
        flexDirection:'row',
        alignItems:'center'
    },
    gestureTouch:{
        width:'50%',
        height:'50%',
        alignItems:'center',
        justifyContent:'center'
    },
    textLabel:{
       color:'#ffffff',
       fontSize:18
    }
})