import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';

type welcomeScreenTypes = NativeStackScreenProps<stackScreens, 'WelcomeScreen'>;
const WelcomeScreen = (props: welcomeScreenTypes) => {
  const {navigation} = props;
  return (
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
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <View style={styles.phoneBtnComponent}>
            <Image
              style={styles.vectorImage}
              source={require('../assests/Images/Vector.png')}
            />
            <Text style={styles.phoneBtnText}>Sign in with Phone Number</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.skipBtnComponent}>
            <Image
              style={styles.arrowImage}
              source={require('../assests/Images/arrow_circle_right.png')}
            />
            <Text style={styles.skipBtnText}>Skip and Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 69,
    width: 173,
  },
  text: {
    color: '#010068',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  btnContainer: {
    marginTop: 200,
    gap: 20,
  },
  phoneBtnComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6060EF',
    height: 54,
    width: 285,
    borderRadius: 12,
  },
  vectorImage: {
    width: 10,
    height: 17,
    marginRight: 10,
  },
  phoneBtnText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#F2F2F2',
  },
  skipBtnComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D6D6EE',
    borderWidth: 2,
    height: 54,
    width: 285,
    borderRadius: 12,
  },
  skipBtnText: {fontWeight: '500', fontSize: 14, color: '#000000'},
  arrowImage: {
    width: 23,
    height: 24,
    marginRight: 10,
  },
});
