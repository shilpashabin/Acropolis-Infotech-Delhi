import React,{useState} from 'react';
import { View,StyleSheet ,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Colors from '../config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Signin=({navigation})=>
{
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    return(
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={()=> navigation.goBack(null)} style={{padding:20}}>
                <AntDesign name="left" size={20} color={Colors.secondary}/></TouchableOpacity>
            <Text style={styles.textStyle}>SIGNIN</Text>

              <View style={{marginVertical:20}}> 
                        
      <TextInput
        style={styles.textInputContainer}
        placeholder={"username"}
        placeholderTextColor={'#000'}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
</View> 
<View style={{marginVertical:20}}>  
   <TextInput
        style={styles.textInputContainer}
        placeholder={"password"}
        placeholderTextColor={'#000'}
        onChangeText={text => setText1(text)}
        defaultValue={text1}
        secureTextEntry
      />
      </View>
          
      <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGNIN</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.accntText}>Have you an acount? Create one</Text>
            </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

export default Signin;

const styles=StyleSheet.create({
    container:{

    },
    textStyle:{
        fontSize:30,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20,
        textAlign:'center',
        paddingTop:100
        
    },
    textInputContainer:{
        backgroundColor:'#ccc',
        width:'90%',
        alignSelf:'center',
        padding:20,
        borderRadius:8,
    },
    buttonContainer: {
        height: 50,
        backgroundColor:Colors.secondary,
        borderRadius: 6,
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'90%',
       alignSelf:'center'
    },
    buttonText: {
        
        paddingHorizontal: 20,
         paddingVertical: 15,
         borderRadius: 15,
         color: 'white',
         fontWeight: 'bold',
    },
    accntText:{
        height: 50,
        color:Colors.secondary,
        borderRadius: 6,
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%',
        textAlign:'center',
        fontWeight:'bold'
    }
})