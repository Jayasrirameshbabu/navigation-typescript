import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import commonStyles from '../../../styles';
import OTPTextInput from 'react-native-otp-textinput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';
import InputComponent from '../../components/InputComponent';
import AsyncStorage from '@react-native-community/async-storage';

type SetPasswordScreenTypes = NativeStackScreenProps<
  stackScreens,
  'SetPasswordScreen'
>;

const SetPasswordScreen = (props: SetPasswordScreenTypes) => {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = (newPassword: string) => {
    setNewPassword(newPassword);
  };
  const handleChangeName = (name: string) => {
    setUserName(name);
  };

  const isValid = newPassword.length === 6;
  const handlePasswordFilled = (newPassword: string) => {
    if (newPassword.length === 6) {
      Keyboard.dismiss();
    }
  };

  const handleSubmit = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const userObject = JSON.parse(userData);
        userObject.password = newPassword;
        userObject.userName = userName;
        await AsyncStorage.setItem('user', JSON.stringify(userObject));
        console.log('updated user', userObject);
        navigation.navigate('WishListScreen');
      }
    } catch (e) {
      console.log('Error storing user data', e);
    }
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView>
        <BackgroundImage />
        <View style={[commonStyles.Boxcontainer, {height: 330, top: -150}]}>
          <View>
            <Text style={commonStyles.header}>Set Password</Text>
          </View>
          <Text style={[commonStyles.title, {marginBottom: -10}]}>
            Set Username
          </Text>
          <View style={{width: '100%'}}>
            <InputComponent
              placeholder="Enter your Name "
              image={require('../../../assests/Images/authScreenImages/person.png')}
              inputSectionStyle={commonStyles.inputSectionStyle}
              inputImageStyle={commonStyles.inputImageStyle}
              inputTextStyle={commonStyles.inputText}
              onChangeText={handleChangeName}
              value={userName}
            />
          </View>
          <Text style={commonStyles.title}>Set new 6 digit Password</Text>
          <OTPTextInput
            containerStyle={commonStyles.passwordInputTextContainer}
            textInputStyle={commonStyles.otpInputText}
            inputCount={6}
            handleTextChange={password => {
              handleChangePassword(password);
              handlePasswordFilled(password);
            }}
          />
          <View style={[commonStyles.buttonContainer, {marginTop: 25}]}>
            <Pressable onPress={handleSubmit}>
              <View
                style={[
                  commonStyles.buttonInner,
                  {
                    backgroundColor: isValid ? '#6060EF' : '#D7D7DD',
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SetPasswordScreen;
