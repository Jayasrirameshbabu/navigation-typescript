import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';
import OTPTextInput from 'react-native-otp-textinput';
import commonStyles from '../../../styles';

type OtpScreenTypes = NativeStackScreenProps<stackScreens, 'OtpScreen'>;

const OtpScreen = (props: OtpScreenTypes) => {
  const {navigation, route} = props;
  let mobileNumber = route.params.mobileNumber;
  const [otp, setOtp] = useState('');

  const handleOTPChange = (otp: string) => {
    setOtp(otp);
  };

  const handleOtpFilled = (otp: string) => {
    if (otp.length === 6) {
      Keyboard.dismiss();
    }
  };
  const isOtpValid = otp.length === 6;

  const formattedMobileNumber = `${mobileNumber.slice(
    0,
    4,
  )}***${mobileNumber.slice(-3)}`;

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView>
        <BackgroundImage />
        <View style={commonStyles.Boxcontainer}>
          <View>
            <Text style={commonStyles.title}>
              OTP has been sent successfully to {formattedMobileNumber}
            </Text>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.modifyText}>Modify Number</Text>
            </Pressable>
            <OTPTextInput
              containerStyle={commonStyles.otpInputTextContainer}
              textInputStyle={commonStyles.otpInputText}
              inputCount={6}
              tintColor="#000"
              offTintColor="#ccc"
              handleTextChange={newotp => {
                handleOTPChange(newotp);
                handleOtpFilled(newotp);
              }}
            />
            <View style={styles.resendOtp}>
              <Text style={commonStyles.title}>Did not Receive OTP?</Text>
              <Text style={commonStyles.title}>00.30 s</Text>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.resendText}>RESEND OTP</Text>
              </Pressable>
            </View>
            <View style={[commonStyles.buttonContainer, {marginVertical: 30}]}>
              <Pressable
                onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <View
                  style={[
                    commonStyles.buttonInner,
                    {
                      backgroundColor: isOtpValid ? '#6060EF' : '#D7D7DD',
                    },
                  ]}>
                  <Image
                    style={commonStyles.arrowButton}
                    source={require('../../../assests/Images/authScreenImages/arrow_right_alt.png')}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  modifyText: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Outfit-Bold',
  },

  resendOtp: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: 20,
  },
  resendText: {
    color: '#0000FF',
    fontSize: 13,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Outfit-Bold',
  },
});
