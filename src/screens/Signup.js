import React,{useState} from 'react';
import { View,StyleSheet ,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Colors from '../config/Colors';

const Signup=({navigation})=>
{
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    return(
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.textStyle}>SIGNUP</Text>

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
          
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>

       

            </ScrollView>
        </View>
    );
};

export default Signup;

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
    
});