import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackScreens} from '../../types';

import PaymentsScreen from '../../src/screens/PaymentScreen/PaymentsScreen';
import WishListScreen from '../../src/screens/WhishList/WishListScreen';
import Services from '../../src/screens/ServicesScreen/Services';

const Stack = createNativeStackNavigator<stackScreens>();
const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="WishListScreen">
      <Stack.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="WishListScreen"
        component={WishListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ServicesScreen"
        component={Services}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
