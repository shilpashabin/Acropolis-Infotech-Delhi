import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import BoxContainer from '../../components/Box_container';
import Colors from '../../config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native';

const BurgerRecipes = ({navigation}) =>
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
                                    <Text style={styles.headerHeading}>Burger Recipies</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" 
                                size={20} color={Colors.background}/>
                            </TouchableOpacity>

                            </View>





            <View style={{flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/burger/burger1.jpg')} 
                    title="Tandoori Burger" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/burger/burger2.jpg')} 
                    title="Egg Burger" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/burger/burger3.jpg')} 
                    title="Tasty turkey Burger" subtitle="Banglore,India"></BoxContainer>
                    <BoxContainer data={require('../../assets/images/burger/burger4.jpg')} 
                    title=" Oven story Burger" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/burger/burger5.jpg')} 
                    title="Grilled Teriyaki Burger" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/burger/burger6.jpg')} 
                    title="Bomb Burger" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/burger/burger7.jpg')} 
                    title="Hamburger" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/burger/burger8.jpg')} 
                    title="Spicy Burger" ></BoxContainer>
                </View>
            </View>

            </ScrollView>
        </View>
    );
};

export default BurgerRecipes;

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