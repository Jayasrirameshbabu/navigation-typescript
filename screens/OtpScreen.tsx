import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';
import OTPTextInput from 'react-native-otp-textinput';

type OtpScreenTypes = NativeStackScreenProps<stackScreens, 'OtpScreen'>;

const OtpScreen = (props: OtpScreenTypes) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BackgroundImage />
        <View style={styles.Otpcontainer}>
          <View>
            <Text style={styles.title}>
              OTP has been sent successfully to 8722***778
            </Text>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.modifyText}>Modify Number</Text>
            </Pressable>
            <OTPTextInput
              containerStyle={styles.inputTextContainer}
              textInputStyle={styles.otpInputText}
              inputCount={6}
            />
            <View style={styles.resendOtp}>
              <Text style={styles.title}>Did not Receive OTP?</Text>
              <Text style={styles.title}>00.30 s</Text>
              <Pressable>
                <Text style={styles.resendText}>RESEND OTP</Text>
              </Pressable>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <View style={[styles.buttonInner]}>
                  <Image
                    style={styles.arrowButton}
                    source={require('../assests/Images/arrow_right_alt.png')}
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
  container: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  Otpcontainer: {
    width: 350,
    height: 230,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    top: -100,
    elevation: 6,
    padding: 20,
    gap: 20,
    zIndex: 10,
    left: 30,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
  },
  modifyText: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '800',
  },
  inputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  otpInputText: {
    flex: 1,
  },
  resendOtp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '25%',
    marginTop: 30,
  },
  resendText: {
    color: '#0000FF',
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
    height: 60,
    width: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
  },
  buttonInner: {
    borderRadius: 22,
    height: 44,
    width: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D6DF0',
  },
  arrowButton: {height: 16, width: 16},
});
