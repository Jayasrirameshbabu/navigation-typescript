import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import {stackScreens} from '../../types';
import LoginScreen from '../../screens/LoginScreen';
import OtpScreen from '../../screens/OtpScreen';
// import Home from '../../screens/Home';

// import Screen1 from '../../screens/Screen1';
// import Screen2 from '../../screens/Screen2';
// import FetchData from '../../screens/FetchData';
// import Card from '../../screens/Card';

// export type stackScreens = {
//   WelcomeScreen: undefined;
// Home: undefined;

// Screen1: {msg: string};
// Screen2: {info: string};
// FetchData: undefined;
// Card: {title: string};
// };
const Stack = createNativeStackNavigator<stackScreens>();
const AllScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      {/* <Stack.Screen name="FetchData" component={FetchData} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Card" component={Card} /> */}
    </Stack.Navigator>
  );
};

export default AllScreens;
