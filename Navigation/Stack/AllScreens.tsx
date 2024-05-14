import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';

import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';
import FetchData from '../../screens/FetchData';
import Card from '../../screens/Card';

export type stackScreens = {
  Home: undefined;

  Screen1: {msg: string};
  Screen2: {info: string};
  FetchData: undefined;
  Card: {title: string};
};
const Stack = createNativeStackNavigator<stackScreens>();
const AllScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FetchData" component={FetchData} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
  );
};

export default AllScreens;
