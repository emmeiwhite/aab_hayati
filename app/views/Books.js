import React,{Component} from 'react';
import {FlatList,Text,View,StyleSheet,Image} from 'react-native';

export default class Books extends Component{
    constructor(props){
        super(props);

        this.state = {
            dataSource:[] // Data will come from the Server in the form of json data
        }
    }

    componentDidMount(){
        // Just after the constructor is called this method gets invoked!!!
        // We will use this method to fetch our data : FETCHING DATA FROM THE SERVER
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1';
        fetch(url)
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                dataSource:responseJson.book_array // it is the "book_array" in the Json data. We can make use of all this
            })
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    renderBooks = ({item})=>{  // By default how is it able to fetch the data from state.
        // Must always remember that we can only return some JSX. return( JSX)

        return(
            <View style={styles.booksContainer} key={item.book_title}>
                <View style={styles.bookInfo}>
                    <Image source={{uri:item.image}} style={styles.bookImage}/>
                    <View style={styles.bookDetails}>
                        <Text style={styles.textData}>{item.book_title}</Text>
                        <Text style={styles.textData}>{item.author}</Text>
                    </View>
                </View>
            </View>
        )
    }

    // To prevent the default rendering of header in navigation we use
    static navigationOptions = {
        header:null
    }

    render(){
        return(
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderBooks}
                />    
            </View>
        )
    }
}


const styles = StyleSheet.create({
    booksContainer:{
        flex:1,
        backgroundColor:'#999999'
    },
    bookInfo:{
        flexDirection:'row',
        marginBottom:30,
        paddingLeft:10
    },
    bookImage:{
        flex:1,
        height:80,
        width:80
    },
    bookDetails:{
        flex:3,
        paddingLeft:20,
        paddingTop:10,
    },
    textData:{
        fontSize:16,
        color:'#333333'
    }

})