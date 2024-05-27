import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginInputBoxModal from '../../components/LoginInputBoxModal';
import BackgroundImage from '../../components/BackgroundImage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';
import commonStyles from '../../../styles';
import AsyncStorage from '@react-native-community/async-storage';

type loginTypes = NativeStackScreenProps<stackScreens, 'LoginScreen'>;
const LoginScreen = (props: loginTypes) => {
  const {navigation} = props;

  const [mobileNumber, setMobileNumber] = useState('');

  const [isValidMobileNumber, setIsValidMobileNumber] = useState(false);
  const storeData = async () => {
    try {
      const user = {mobileNumber};
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.log('Error in storing data', e);
    }
  };

  const handleMobileNumber = (text: string) => {
    setMobileNumber(text);
    setIsValidMobileNumber(text.length === 10);
  };

  const handlePress = async () => {
    if (isValidMobileNumber) {
      await storeData();
      navigation.navigate('OtpScreen', {mobileNumber: mobileNumber});
      setIsValidMobileNumber(false);
    }
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <BackgroundImage />
        <View>
          <LoginInputBoxModal
            header="Login"
            title="Mobile Number"
            placeholder="Enter Mobile Number"
            footerimage={require('../../../assests/Images/authScreenImages/help.png')}
            footerText="We will send you an OTP"
            buttonimage={require('../../../assests/Images/authScreenImages/arrow_right_alt.png')}
            onChangeMobileNumber={handleMobileNumber}
            isValidMobileNumber={isValidMobileNumber}
            mobileNumber={mobileNumber}
            handlePress={handlePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
