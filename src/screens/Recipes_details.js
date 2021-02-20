import React from 'react';
import {View,StyleSheet,Image,Text,ScrollView,TouchableOpacity, }from 'react-native';
import Colors from '../config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const RecipeDetails =({navigation})=>
{
    return(
        <View style={styles.container}>
        <ScrollView>

        {/* header */}
        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Vegrecepies')}>
                            <AntDesign name="arrowleft" size={30} color={Colors.background} />
                            </TouchableOpacity>

                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Veg kuruma</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" 
                                size={20} color={Colors.background}/>
                            </TouchableOpacity>

                            </View>



        <View style={{flexDirection:'column'}}>
        <Image source={require('../assets/images/healthy.jpg')} style={styles.imageContainer}/>
        <View style={styles.textContainer}>
        <Text style={styles.text1}>Duration : 40 min</Text>
        <Text  style={styles.text1}>Serving : 3-4</Text>
        </View>
        
            <Text style={styles.textHeading}>Ingredients</Text>
            
            <View style={{paddingHorizontal:20,paddingVertical:20}}> 
                <Text>1 cup coconut, grated</Text>
                <Text>8 cashew / kaju</Text>
                <Text>1 inch ginger</Text>
                <Text>1 clove garlic</Text>
                <Text>2 chilli</Text>
                <Text>2 tbsp poppy seeds / khus khus</Text>
                <Text>1 tsp coriander seeds</Text>
                <Text>½ tsp fennel / saunf</Text>
                <Text>handful coriander</Text>
                <Text>¼ cup water</Text>
                <Text>½ carrot, chopped 10 florets cauliflower / gobi</Text>
                <Text>1 potato, chopped</Text>
                <Text>5 beans, chopped 1 tsp salt</Text>
                
                </View>
                
                    <Text style={styles.textHeading}>Instructions</Text>

                    <View style={{paddingHorizontal:20,top:10}}> 
                    <Text>1. firstly, in a large kadai heat 4 tsp oil and saute spices.</Text>
                    <Text>2. add 1 onion and saute well.</Text>
                    <Text>3. further, add 1 tomato and saute until soft and mushy.</Text>
                    <Text>4. now add vegetables and 1 tsp salt.</Text>
                    <Text>5. saute for 2 minutes or until vegetables are stir-fried.</Text>
                    <Text>6. also, add 2 cup water and stir well.</Text>
                    <Text>7. cover and boil for 10 minutes or until vegetables are almost cooked.</Text>
                    <Text>8. add in prepared masala paste to the cooked vegetables and stir fry for 2 minutes.</Text>
                    <Text>9. now add 1½ cup water and stir well.</Text>
                    <Text>10. cover and cook for 10 minutes or until vegetables are cooked completely.</Text>
                     <Text></Text>
                     <Text></Text>
                    </View>
        

        </View>




        </ScrollView>
        </View>
    );
};

export default RecipeDetails;

const styles=StyleSheet.create({
    container:{
    
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:Colors.secondary,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
    headerHeading: {
        fontSize: 20,
        color:Colors.background,
        fontWeight: 'bold',
        paddingLeft:30
    },
    
     optionButton: {
        paddingRight: 20,
        paddingLeft: 20,
         paddingVertical: 20,
      
     },
    nameContainer: {
        marginLeft: 20
    },
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginHorizontal: 10,
        width: '70%',
        alignItems: 'center'
    },
    imageContainer:{
        width:'100%',
        height:200,
        borderColor:'#fff',
        borderWidth:10,
},
text1:{
 color:'#000',
 fontWeight:'bold'

},

textContainer:{
    flexDirection:'row',
    padding:10,
    justifyContent:'space-between',
    paddingHorizontal:20
},
textHeading:{
    fontSize:22,
    paddingHorizontal:20,
   
}
})