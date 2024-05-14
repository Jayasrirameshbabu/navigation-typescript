import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Accounts: undefined;
  Cart: undefined;
  Details: undefined;
  Payment: undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Home',
  'Account'
>;
