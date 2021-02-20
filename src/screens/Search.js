import React,{useState} from 'react';
import { View,StyleSheet,TouchableOpacity ,ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../config/Colors';
import BoxContainer  from '../components/Box_container';


const Search = () =>
{
    const [search,setSearch]= useState("");

  const updateSearch = (search) => {
    setSearch("search")
  };
    
    return(
        <View>
            <ScrollView>
                {/* header */}
                
                                  <SearchBar 
                                    placeholder="search for favouites recipes"
                                    onChangeText={updateSearch}
                                    value={search}
                                    />
                                  
                              
                         
            <View style={{flexDirection:'column'}}>

<View style={{flexDirection:'row'}}>
    <BoxContainer data={require('../assets/images/cake/cake1.jpg')} 
    title="German Apple Cake" ></BoxContainer>
    <BoxContainer data={require('../assets/images/cake/cake2.jpg')} 
    title="Black Forest Cake" ></BoxContainer>
</View>

<View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/burger/burger1.jpg')} 
                    title="Tandoori Burger" ></BoxContainer>
                    <BoxContainer data={require('../assets/images/burger/burger2.jpg')} 
                    title="Egg Burger" ></BoxContainer>
                </View>
                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/salad/salad1.jpg')} 
                    title="Mexican Pasta salad" ></BoxContainer>
                    <BoxContainer data={require('../assets/images/salad/salad2.jpg')} 
                    title="Potato Salad" ></BoxContainer>
                </View>
                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/pizza/pizza7.jpg')} 
                    title="BBQ ChickEn Pizza" ></BoxContainer>
                    <BoxContainer data={require('../assets/images/pizza/pizza8.jpg')} 
                    title="Vegetables Pizza" ></BoxContainer>
                </View>  
                <View style={{flexDirection:'row'}}>
                    <BoxContainer data={require('../assets/images/health/health7.jpg')} 
                    title="Chilcano De Pisco" ></BoxContainer>
                    <BoxContainer data={require('../assets/images/health/health8.jpg')} 
                    title="Roasted Broccoli"></BoxContainer>
                </View>
        
        </View>

        </ScrollView>
        </View>
    );
};

export default Search;

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







 


    

  






