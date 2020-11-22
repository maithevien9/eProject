import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import store from './src/Redux/Redux';
import {Provider} from 'react-redux';
import Main from './src/Components/Main/Main';
import Loading from './src/Components/Loading/Loading';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authenication from './src/Components/Authenication/Authenication';
import Category from './src/Components/Main/Home/category/category';
import Collect from './src/Components/Main/Home/Collect/Collect';
import Gift from './src/Components/Main/Home/Gift/Gift';
import Points from './src/Components/Main/Home/Points/Points';
import HistoryGift from './src/Components/Main/Home/Menu/HistoryGift';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Authenication" component={Authenication} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Collect" component={Collect} />
          <Stack.Screen name="Gift" component={Gift} />
          <Stack.Screen name="Points" component={Points} />
          <Stack.Screen name="HistoryGift" component={HistoryGift} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
