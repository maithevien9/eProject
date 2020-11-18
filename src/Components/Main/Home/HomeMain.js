import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Category from './category/category';
import Home from './Home';

const Stack2 = createStackNavigator();
const HomeMain = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack2.Navigator screenOptions={{headerShown: false}}>
        <Stack2.Screen name="Home" component={Home} />
        <Stack2.Screen name="Category" component={Category} />
      </Stack2.Navigator>
    </NavigationContainer>
  );
};

export default HomeMain;
