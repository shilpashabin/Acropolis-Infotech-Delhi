import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import BoxContainer from '../../components/Box_container';
import Colors from '../../config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native';

const Vegrecipes = ({navigation}) =>
{
    return(

        <View>
            <ScrollView>
            {/* header */}
            <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <AntDesign name="arrowleft" size={30} color={Colors.background} />
                            </TouchableOpacity>

                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Vegetarian Recipies</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" 
                                size={20} color={Colors.background}/>
                            </TouchableOpacity>

                            </View>





            <View style={{flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>
                  
                    <BoxContainer data={require('../../assets/images/veg/veg1.jpg')} 
                    onPress={() => navigation.navigate('RecipeDetails')}
                    title="veg curuma" ></BoxContainer>
                    

                    <BoxContainer data={require('../../assets/images/veg/veg2.jpg')} 
                    title="Veg Fried Rice" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/veg/veg3.jpg')} 
                    title="Veg Biriyani" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/veg/veg4.jpg')} 
                    title="Veg Pulav" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/veg/veg5.jpg')} 
                    title="Veg Rice" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/veg/veg6.jpg')} 
                    title="Veg Noodle" ></BoxContainer>
                </View>

                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../../assets/images/veg/veg7.jpg')} 
                    title="veg panner Rice" ></BoxContainer>
                    <BoxContainer data={require('../../assets/images/veg/veg8.jpg')} 
                    title="Lasagana" ></BoxContainer>
                </View>
            </View>

            </ScrollView>
        </View>
    );
};

export default Vegrecipes;

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