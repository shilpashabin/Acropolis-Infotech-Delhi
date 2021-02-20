import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image} from 'react-native';
import Colors from '../config/Colors';

const ImageContainer = ({data,title,}) =>{

    return(

        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.ImageContainer} source={data}/>
                <Text style={styles.textContainer}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ImageContainer;

const styles=StyleSheet.create({
    container:{

    },
    ImageContainer:{
        width:'100%',
        height:200,
        bottom:0,
        opacity:0.8
    },
    textContainer:{
        color:Colors.background,
        fontSize:25,
        fontWeight:'bold',
        position:'absolute',
        bottom:80,
        justifyContent:'center',
        alignSelf:'center',
        flex:1,
        
    }
});