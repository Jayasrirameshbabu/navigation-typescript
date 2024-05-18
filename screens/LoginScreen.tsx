import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputBoxModal from './InputBoxModal';
import BackgroundImage from './BackgroundImage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';

type loginTypes = NativeStackScreenProps<stackScreens, 'LoginScreen'>;
const LoginScreen = (props: loginTypes) => {
  const {navigation} = props;
  const [mobileNumber, setMobileNumber] = useState('');

  const [isValidMobileNumber, setIsValidMobileNumber] = useState(false);

  const handleMobileNumber = (text: string) => {
    setMobileNumber(text);
    setIsValidMobileNumber(text.length === 10);
  };

  const handlePress = () => {
    if (isValidMobileNumber) {
      navigation.navigate('OtpScreen');
      setMobileNumber(''); // Clear the state holding the mobile number
      setIsValidMobileNumber(false); // Reset the validity state
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BackgroundImage />
        <View>
          <InputBoxModal
            header="Login"
            title="Mobile Number"
            placeholder="Enter Mobile Number"
            footerimage={require('../assests/Images/help.png')}
            footerText="We will send you an OTP"
            buttonimage={require('../assests/Images/arrow_right_alt.png')}
            onChangeMobileNumber={handleMobileNumber}
            isValidMobileNumber={isValidMobileNumber}
            mobileNumber={mobileNumber}
            handlePress={handlePress}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
  },
});
