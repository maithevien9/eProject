import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from './Contact';
import ContactUpdate from './ContactUpdate';

const Stack2 = createStackNavigator();
const ContactMain = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack2.Navigator screenOptions={{headerShown: false}}>
        <Stack2.Screen name="Contact" component={Contact} />
        <Stack2.Screen name="ContactUpdate" component={ContactUpdate} />
      </Stack2.Navigator>
    </NavigationContainer>
  );
};

export default ContactMain;
