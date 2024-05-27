import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';

import CustomButton from '../../components/ButtonComponent';

type welcomeScreenTypes = NativeStackScreenProps<stackScreens, 'WelcomeScreen'>;
const WelcomeScreen = (props: welcomeScreenTypes) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>Login to continue</Text>
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assests/Images/authScreenImages/Group-6451.png')}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          title="Sign in with Phone Number"
          image={require('../../../assests/Images/authScreenImages/Vector.png')}
          onPress={() => navigation.navigate('LoginScreen')}
          buttonStyle={styles.phoneBtnComponent}
          textStyle={styles.phoneBtnText}
          imageStyle={styles.vectorImage}
        />
        <CustomButton
          title="Skip and Continue"
          image={require('../../../assests/Images/authScreenImages/arrow_circle_right.png')}
          onPress={() => navigation.navigate('LoginScreen')}
          buttonStyle={styles.skipBtnComponent}
          textStyle={styles.skipBtnText}
          imageStyle={styles.arrowImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  header: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginBottom: '20%',
    marginTop: 20,
  },
  text1: {
    color: '#000000',
    fontSize: 34,
    fontWeight: '500',
    fontFamily: 'Outfit-Medium',
    lineHeight: 38,
  },
  text2: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '400',
    fontFamily: 'Outfit-Regular',
    paddingVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {height: 350, width: 350, resizeMode: 'stretch'},
  btnContainer: {
    alignItems: 'center',

    width: '100%',
    marginTop: '15%',
  },
  phoneBtnComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6060EF',
    height: 54,
    width: '100%',
    borderRadius: 15,
  },
  vectorImage: {
    width: 15,
    height: 17,
    marginRight: 15,
    objectFit: 'contain',
  },
  phoneBtnText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#F2F2F2',
    fontFamily: 'Outfit-Regular',
  },
  skipBtnComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D6D6EE',
    borderWidth: 2,
    height: 54,
    width: '100%',
    borderRadius: 15,
  },
  skipBtnText: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Outfit-Regular',
  },
  arrowImage: {
    width: 23,
    height: 24,
    marginRight: 18,
    objectFit: 'contain',
  },
});
