import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

import Home from '../screens/home';
import Healthyrecipes from '../screens/Recipes/Healthyrecipes';
import Saladrecipes from '../screens/Recipes/Saladrecipes';
import Vegrecipes from '../screens/Recipes/Vegrecepies';
import Dessertrecipes from '../screens/Recipes/Dessertrecipes';
import Cakerecipes from '../screens/Recipes/Cakerecipes';
import Pizzarecipes from '../screens/Recipes/Pizzarecipes';
import Burgerrecipes from '../screens/Recipes/Burgerrecipes';
import RecipeDetails from '../screens/Recipes_details';


const Stack = createStackNavigator();
  const HomeScreenStack = () => {
    
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "#fff"
        }} initialRouteName ={Home}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Healthy Recipes" component={Healthyrecipes} options={{ headerShown: false }} />
            <Stack.Screen name="Salad Recipes" component={Saladrecipes} options={{ headerShown: false }}/>
            <Stack.Screen name="Vegetarian Recipes" component={Vegrecipes} options={{ headerShown: false }} />
            <Stack.Screen name="Dessert Recipes" component={Dessertrecipes} options={{ headerShown: false }} />
            <Stack.Screen name="Cake Recipes" component={Cakerecipes} options={{ headerShown: false }} />
            <Stack.Screen name="Pizza Recipes" component={Pizzarecipes} options={{ headerShown: false }} />
            <Stack.Screen name="Burger Recipes" component={Burgerrecipes} options={{ headerShown: false }} />
            <Stack.Screen name="Recipes Details" component={RecipeDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
export default HomeScreenStack;