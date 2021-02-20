import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import BoxContainer from '../../components/Box_container';
import Colors from '../../config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native';

const Healthyrecipes = ({navigation}) =>
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
                                    <Text style={styles.headerHeading}>Healthy Recipes</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" 
                                size={20} color={Colors.background}/>
                            </TouchableOpacity>

                            </View>





            <View style={{flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/health/health1.jpg')} 
                    title="Greek Potatoes" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/health/health2.jpg')} 
                    title="Chinese Chicken" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/health/health3.jpg')} 
                    title="Beef Stew" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/health/health4.jpg')} 
                    title="Chicken Noodles" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/health/health5.jpg')} 
                    title="Funky Chicken" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/health/health6.jpg')} 
                    title="Pescado Sudado" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/health/health7.jpg')} 
                    title="Chilcano De Pisco" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/health/health8.jpg')} 
                    title="Roasted Broccoli"></BoxContainer>
                </View>
            </View>

            </ScrollView>
        </View>
    );
};

export default Healthyrecipes;

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