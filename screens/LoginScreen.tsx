import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';

type loginTypes = NativeStackScreenProps<stackScreens, 'LoginScreen'>;

const LoginScreen = (props: loginTypes) => {
  const {navigation} = props;
  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="stretch"
        source={require('../assests/Images/Vector5.png')}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require('../assests/Images/kalyani_dark.png')}
            />
          </View>
          <View>
            <Text style={styles.text}>Karnataka’s No.1 </Text>
            <Text style={styles.text}>Maruti Suzuki Dealership</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.loginText}>Mobile Number</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Mobile Number"
            />
            <View style={styles.helpContainer}>
              <Image
                style={styles.icon}
                source={require('../assests/Images/help.png')}
              />
              <Text style={styles.helpText}>We will send you an OTP</Text>
            </View>
            {/* <View style={styles.arrowContainer}> */}
            <Image
              style={styles.rightImage}
              source={require('../assests/Images/arrow_right_alt.png')}
            />
            {/* </View> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    // width: 375,
    height: 475,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    height: 69,
    width: 173,
    marginBottom: 20,
  },
  text: {
    color: '#010068',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  inputContainer: {
    height: 200,
    width: 350,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    top: 200,
    elevation: 6,
    padding: 20,
    gap: 10,
  },
  loginText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    height: 16,
    width: 16,
  },
  helpText: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '500',
  },

  inputText: {
    width: 285,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingLeft: 15,
  },
  helpContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  rightImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
    // color: 'red',
  },
  arrowContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
