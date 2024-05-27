import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';

type LandingScreenTypes = NativeStackScreenProps<stackScreens, 'LandingScreen'>;

const LandingScreen = (props: LandingScreenTypes) => {
  const {navigation} = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../../assests/Images/authScreenImages/Group-357.png')}
        />
      </View>
      <View style={styles.innerImage}>
        <Image
          source={require('../../../assests/Images/authScreenImages/Group-356.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please wait as we bring to you </Text>
        <Text style={styles.text}>the best car buying experience</Text>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 180,
    height: 180,
  },
  innerImage: {
    top: -120,
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Outfit-Medium',
  },
  textContainer: {
    top: -40,
  },
});
