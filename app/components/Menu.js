import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Alert} from 'react-native';


export default class Menu extends Component{
    render(){
        return(     
            <View style={styles.container}>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel}>BOOKS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel}>BLOG</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.gestureTouch}>
                            <Text style={styles.textLabel} onPress={()=>Alert.alert("Let's create our Contact page !!!")}>CONTACT</Text>
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