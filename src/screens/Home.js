import React from 'react';
import {StyleSheet,View,Text,ScrollView,TouchableOpacity,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ImageContainer from '../components/Image_container';
import Colors from '../config/Colors';
import {useNavigation} from '@react-navigation/native';


const Home= () => {
     const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
        <ScrollView>

{/* header */}
                 <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name="menu" size={30} color={Colors.background} />
                            </TouchableOpacity>

                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Home</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" 
                                size={20} color={Colors.background}/>
                            </TouchableOpacity>
                        </View>

                <View style={styles.cuisineContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('Healthyrecipes')}>
            <ImageContainer data={require('../assets/images/healthy.jpg')} title="Healthy Recipies"
           
            />
          </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Saladrecipes')}>
             <ImageContainer data={require('../assets/images/salad.jpg')} title="Salad Recipies"/>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => navigation.navigate('Vegetarianrecipes')}>
             <ImageContainer data={require('../assets/images/vegetarian.jpg')} title="vegetarian Recipies"/>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => navigation.navigate('Dessertrecipes')}>
             <ImageContainer data={require('../assets/images/dessert.jpg')} title="Dessert Recipies"/>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => navigation.navigate('Cakerecipes')}>
             <ImageContainer data={require('../assets/images/cake.jpg')} title="Cake Recipies"/>
             </TouchableOpacity> 

             <TouchableOpacity onPress={() => navigation.navigate('Pizzarecipes')}>
             <ImageContainer data={require('../assets/images/pizza.jpg')} title="Pizza Recipies"/> 
             </TouchableOpacity>

             <TouchableOpacity onPress={() => navigation.navigate('Burgerrecipes')}>
             <ImageContainer data={require('../assets/images/burger.jpg')} title="Burger Recipies"/>
             </TouchableOpacity>
             
                </View>

    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    cuisineContainer:{
        flexDirection:'column',

    },
    
});

export default Home;
