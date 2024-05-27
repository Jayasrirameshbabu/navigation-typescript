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
import AsyncStorage from '@react-native-community/async-storage';

type ForgotPasswordScreenTypes = NativeStackScreenProps<
  stackScreens,
  'ForgotPasswordScreen'
>;

const ForgotPasswordScreen = (props: ForgotPasswordScreenTypes) => {
  const {navigation} = props;
  const [password, setPassword] = useState('');

  const handleChangePassword = async (password: string) => {
    setPassword(password);
    if (password.length === 6) {
      Keyboard.dismiss();
    }
  };
  const handleSubmit = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const userObject = JSON.parse(userData);
        userObject.password = password;
        await AsyncStorage.setItem('user', JSON.stringify(userObject));
        console.log('user', userObject);
        navigation.navigate('SetPasswordScreen');
      }
    } catch (e) {
      console.log('Error storing user data', e);
    }
  };
  const isValidPassword = password.length === 6;
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView>
        <BackgroundImage />
        <View style={commonStyles.Boxcontainer}>
          <View>
            <View>
              <Text style={commonStyles.header}>Enter Login Password</Text>
            </View>
            <Text style={[commonStyles.title, {marginTop: 15}]}>
              Enter 6 digit Password
            </Text>
            <OTPTextInput
              containerStyle={commonStyles.otpInputTextContainer}
              textInputStyle={commonStyles.otpInputText}
              inputCount={6}
              handleTextChange={handleChangePassword}
            />
            <View style={styles.footerContainer}>
              <Image
                style={styles.footerImage}
                source={require('../../../assests/Images/authScreenImages/help-1.png')}
              />
              <Text
                style={[styles.footerText, {textDecorationLine: 'underline'}]}>
                FORGOT PASSWORD
              </Text>
            </View>
            <View style={[commonStyles.buttonContainer, {top: 30}]}>
              <Pressable onPress={handleSubmit}>
                <View
                  style={[
                    commonStyles.buttonInner,
                    {
                      backgroundColor: isValidPassword ? '#6060EF' : '#D7D7DD',
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

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  modifyText: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '800',
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
  footerContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    // fontWeight: '600',
    color: '#0000FF',
    fontFamily: 'Outfit-Bold',
  },
  footerImage: {
    height: 18,
    width: 18,
    color: 'red',
  },
});
