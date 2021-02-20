import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import BoxContainer from '../../components/Box_container';
import Colors from '../../config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native';

const PizzaRecipes = ({navigation}) =>
{
    return(

        <View>
            <ScrollView>
            {/* header */}
            <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                            <Ionicons name="menu" size={30} color={Colors.background} />
                            </TouchableOpacity>

                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Pizza Recipies</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" 
                                size={20} color={Colors.background}/>
                            </TouchableOpacity>

                            </View>





            <View style={{flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/pizza/pizza1.jpg')} 
                    title="Pizza Dough" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/pizza/pizza2.jpg')} 
                    title=" Crazy Crust Pizza" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/pizza/pizza3.jpg')} 
                    title="Riz-Za-Pizza" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/pizza/pizza4.jpg')} 
                    title="Greek Pita Pizza" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/pizza/pizza5.jpg')} 
                    title="Pita Pizza" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/pizza/pizza6.jpg')} 
                    title="Sausage Cheese Pizza" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/pizza/pizza7.jpg')} 
                    title="BBQ ChickEn Pizza" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/pizza/pizza8.jpg')} 
                    title="Vegetables Pizza" ></BoxContainer>
                </View>
            </View>

            </ScrollView>
        </View>
    );
};

export default PizzaRecipes;

const styles=StyleSheet.create({
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
});