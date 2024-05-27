import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackScreens} from '../../types';
import WelcomeScreen from '../../src/screens/authScreens/WelcomeScreen';
import LoginScreen from '../../src/screens/authScreens/LoginScreen';
import OtpScreen from '../../src/screens/authScreens/OtpScreen';
import ForgotPassword from '../../src/screens/authScreens/ForgotPassword';
import PaymentsScreen from '../../src/screens/PaymentScreen/PaymentsScreen';
import WishListScreen from '../../src/screens/WhishList/WishListScreen';
import SetPasswordScreen from '../../src/screens/authScreens/SetPasswordScreen';
import LandingScreen from '../../src/screens/authScreens/LandingScreen';
import Services from '../../src/screens/ServicesScreen/Services';
import ACServices from '../../src/screens/ServicesScreen/ACServices';
import ServiceBookingMyself from '../../src/screens/ServicesScreen/ServiceBookingMyself';
import ServiceBookingOthers from '../../src/screens/ServicesScreen/ServiceBookingOthers';
import ConfirmBookingScreen from '../../src/screens/ServicesScreen/ConfirmBookingScreen';

const Stack = createNativeStackNavigator<stackScreens>();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SetPasswordScreen"
        component={SetPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
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
      <Stack.Screen
        name="ACServicesScreen"
        component={ACServices}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ServiceBookingMyselfScreen"
        component={ServiceBookingMyself}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ServiceBookingOthersScreen"
        component={ServiceBookingOthers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConfirmBookingScreen"
        component={ConfirmBookingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
