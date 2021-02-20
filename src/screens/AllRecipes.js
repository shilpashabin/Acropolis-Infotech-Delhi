import React from 'react';
import {View,ScrollView,StyleSheet,TouchableOpacity,Text} from 'react-native';
import Colors from '../config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BoxContainer from '../components/Box_container';

const Recipes = ({navigation}) =>{


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
                                    <Text style={styles.headerHeading}>All Recipes</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" 
                                size={20} color={Colors.background}/>
                            </TouchableOpacity>
                        </View>


            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/burger/burger3.jpg')} 
                    title="Tasty turkey Burger" subtitle="Banglore,India"></BoxContainer>
                     <BoxContainer data={require('../assets/images/health/health5.jpg')} 
                    title="Funky Chicken" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                <BoxContainer data={require('../assets/images/burger/burger4.jpg')} 
                    title=" Oven story Burger" ></BoxContainer>
                    <BoxContainer data={require('../assets/images/health/health6.jpg')} 
                    title="Pescado Sudado" ></BoxContainer>
                </View>
                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/dessert/dessert3.jpg')} 
                    title="Tres Leches Cake" ></BoxContainer>
                    <BoxContainer data={require('../assets/images/dessert/dessert4.jpg')} 
                    title="Tres Leches" ></BoxContainer>
                </View>

               

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/pizza/pizza5.jpg')} 
                    title="Pita Pizza" ></BoxContainer>
                  <BoxContainer data={require('../assets/images/veg/veg2.jpg')} 
                    title="Veg Fried Rice" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/veg/veg1.jpg')} 
                    title="Veg Noodles" ></BoxContainer>
                      <BoxContainer data={require('../assets/images/pizza/pizza6.jpg')} 
                    title="Sausage Cheese Pizza" ></BoxContainer>
                    
                </View>
                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/dessert/dessert5.jpg')} 
                    title="Russian Tes Cakes" ></BoxContainer>
                    <BoxContainer data={require('../assets/images/dessert/dessert6.jpg')} 
                    title="Chewy Choclate" ></BoxContainer>
                </View>

            </View>




            </ScrollView>
        </View>
    );
};

export default Recipes;

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
})