import React, {useState} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/Colors';

const Favboxcontainer =({data,title,subtitle}) => 
{
  const [color, setColor] = useState(false);

  const FavouriteIcon = () => {
    setColor(!color);
  };

  console.log(color);
 
return (
   <View style={styles.mainContainer}>
     <TouchableOpacity>
  <View style={styles.boxContainer}>
      <Image style={styles.imgContainer} source={data}/>
      <View style={styles.textContainer}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.iconImg} onPress={() => FavouriteIcon()}>
      <AntDesign
          name={'heart'}
          size={20}
          color="#e30707"
          />
    
      </TouchableOpacity>
    </View>
  </View>
  </TouchableOpacity>
  </View>
    );

};

const styles = StyleSheet.create({
    mainContainer:{
    padding:10
    },
    boxContainer:{
      width:160,
      height:180,
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:Colors.background,
      borderRadius:20,
    },
    imgContainer:{
     marginTop:50,
      width:130,
      height:100,
      borderRadius:10,
     },
     textContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
     },
    text:{
      justifyContent:'space-between',
      padding:20,
      color:'black',
      fontWeight:'bold',
      right:0,
      bottom:10
     },
     subText:{
      bottom:35,
      left:10,
      fontWeight:'bold'
     },
     iconImg:{
       bottom:15,
       right:10
     }

});


export default Favboxcontainer;