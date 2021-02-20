
import React,{useEffect} from 'react';
import {StyleSheet,} from 'react-native';
// import Home from './src/screens/Home';
import MyDrawer from './src/navigations/main_navigation';
// import HealthyRecipes from './src/screens/Recipes/Healthy/Healthyrecipes';
// import AllRecipes from './src/screens/AllRecipes';
// import RecipeDetails from './src/screens/Recipes_details';

import SplashScreen from 'react-native-splash-screen'

const App= () => {
  useEffect(() => SplashScreen.hide());
  return (
    < MyDrawer  />
  );
};

const styles = StyleSheet.create({
 
});

export default App;
