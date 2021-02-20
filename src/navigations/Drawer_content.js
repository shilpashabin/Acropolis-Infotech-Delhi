import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableWithoutFeedback,
    ScrollView,TouchableOpacity,Switch
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Divider } from 'react-native-elements';
import Colors from '../config/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomDrawerContent = ({ navigation, ...props }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1, backgroundColor:Colors.background}}>
            <View style={{padding:20}}>
            <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <AntDesign name="left" size={20} color={Colors.secondary}/></TouchableOpacity>
                <View  style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18,color:Colors.secondary,}} >Welcome</Text>
                <Text style={{fontSize:25,color:Colors.secondary,fontWeight:'bold'}}>GUEST!</Text>
                </View>
                </View>

                <View style={styles.drawerContainer}>
               <View style={{justifyContent:'center',alignItems:'center',bottom:25}}>
                   <FontAwesome name="user-circle" size={60} color={Colors.secondary}/>
                   
                   </View> 
                   <View style={{justifyContent:'center',alignItems:'center',bottom:18,}}>
                       <Text style={{fontWeight:'bold',color:Colors.secondary,fontSize:18}}>Guest</Text>
                       <Text style={{color:Colors.secondary,fontSize:14}}>guest@example.com</Text>
                       <Text style={{color:Colors.secondary,fontSize:14}}>Delhi,india</Text>
                   </View>
                </View>

            <DrawerContentScrollView {...props}>
                <View style={styles.drawer}>

                    <DrawerItem
                       
                        {...props}
                        // icon={({ color, size }) =>
                        //  (<FontAwesome name="home" size={30}/>)}
                       inactiveTintColor={Colors.secondary}
                        label="SIGN IN"
                        onPress={() => navigation.navigate('Signin')}
                    />
                   <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem
                       
                        {...props}
                       icon={({ color, size }) =>
                         (<FontAwesome name="home" size={25}/>)}
                        inactiveTintColor={Colors.secondary}
                        label="Home"
                        onPress={() => navigation.navigate('Home')}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    
                    <DrawerItem
                   
                        {...props}
                        icon={({ color, size }) =>
                        (<Ionicons name="fast-food" size={25}/>)}
                        inactiveTintColor={Colors.secondary}
                        label="All Recipes"
                        onPress={() => navigation.navigate('Recipes')}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                   
                    <DrawerItem
                       
                        {...props}
                        icon={({ color, size }) =>
                        (<FontAwesome name="star" size={25}/>)}
                        inactiveTintColor={Colors.secondary}
                        label="Favourites"
                        onPress={() => navigation.navigate('Favourites')}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                     
              
                    <DrawerItem
                        
                        {...props}
                        icon={({ color, size }) =>
                         (<MaterialCommunityIcons name="logout" size={25}/>)}
                        inactiveTintColor="#970e0e"
                        label="Logout"
                        onPress={() => null}
                        
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    
                    <View style={{ height: 40 }}></View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};
export default CustomDrawerContent;


const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: '90%',
        margin: 20,
        elevation: 10,
        bottom:20
    },
    icons:{
        height:20,
        width:20
    },
    drawerContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 130,
        margin: 20,
        elevation: 10,
    },
    drawerItemStyle:{
        bottom:30
    }
});