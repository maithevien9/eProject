import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotifyView from './NotifyView';
import NotifyDetail from './NotifyDetail';

const Stack = createStackNavigator();
const Notify = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="NotifyView" component={NotifyView} />
        <Stack.Screen name="NotifyDetail" component={NotifyDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Notify;
