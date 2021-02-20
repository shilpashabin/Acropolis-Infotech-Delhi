import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import Search from '../screens/Search';
import CustomDrawerContent from '../navigations/Drawer_content';
import Colors from '../config/Colors';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Recipes from '../screens/AllRecipes';

// import Healthyrecipes from '../screens/Recipes/Healthyrecipes';
// import Saladrecipes from '../screens/Recipes/Saladrecipes';
// import Vegrecipes from '../screens/Recipes/Vegrecepies';
// import Dessertrecipes from '../screens/Recipes/Dessertrecipes';
// import Cakerecipes from '../screens/Recipes/Cakerecipes';
// import Pizzarecipes from '../screens/Recipes/Pizzarecipes';
// import Burgerrecipes from '../screens/Recipes/Burgerrecipes';
// import RecipeDetails from '../screens/Recipes_details';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation({ navigation }) {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:Colors.background,
                inactiveTintColor: '#fff',
                style: { height: 57, paddingTop: 8,backgroundColor:Colors.secondary },
                labelPosition: "below-icon"
                
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => <Ionicons name="home" size={focused ? size + 3 : size} color={color} />,
                    tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: focused ? 1 : 1, color: color, marginBottom: focused ? 5 : 6 }}></Text>
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, size, color }) => <MaterialIcons name="search" size={focused ? size + 3 : size} color={color} />,
                    tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: focused ? 1 : 1, color: color, marginBottom: focused ? 5 : 6 }}></Text>
                }}
            />
           
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarIcon: ({ focused, size, color }) => <MaterialIcons name="star" size={focused ? size + 3 : size} color={color} />,
                    tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: focused ? 1 : 1, color: color, marginBottom: focused ? 5 : 6 }}></Text>
                }}
            />
        </Tab.Navigator>
    );
}
export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{ width: '88%' }}
                drawerContentOptions={{
                    inactiveTintColor: 'rgba(0,0,0,0.75)',
                    labelStyle: { fontSize: 16, fontWeight: '700' }
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={TabNavigation} />
                <Drawer.Screen name="Favourites" component={Favourites} />
                <Drawer.Screen name="All Recipes" component={Recipes} />
                <Drawer.Screen name="Signin" component={Signin} />
                <Drawer.Screen name="Signup" component={Signup} />
                {/* <Drawer.Screen name="Healthy Recipes " component={Healthyrecipes} />
                <Drawer.Screen name="Salad Recipes " component={Saladrecipes} />
                <Drawer.Screen name="Vegetarian Recipes" component={Vegrecipes} />
                <Drawer.Screen name="Dessert Recipes " component={Dessertrecipes} />
                <Drawer.Screen name="Cake Recipes " component={Cakerecipes} />
                <Drawer.Screen name= "Pizza Recipes" component={Pizzarecipes} />
                <Drawer.Screen name="Burger Recipes " component={Burgerrecipes} />
                <Drawer.Screen name="Cake Recipes " component={RecipeDetails} /> */}
            </Drawer.Navigator>
        </NavigationContainer >
    );
}