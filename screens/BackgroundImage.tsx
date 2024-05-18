import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';

const BackgroundImage = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="stretch"
      source={require('../assests/Images/Vector5.png')}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assests/Images/kalyani_dark.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>Karnataka’s No.1 </Text>
        <Text style={styles.text}>Maruti Suzuki Dealership</Text>
      </View>
    </ImageBackground>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 475,
    objectFit: 'contain',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  image: {
    height: 80,
    width: 173,
    paddingHorizontal: '10%',
  },
  text: {
    color: '#010068',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
  },
});
