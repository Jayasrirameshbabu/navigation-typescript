import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';

const BackgroundImage = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="stretch"
      source={require('../../assests/Images/authScreenImages/Vector5.png')}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assests/Images/authScreenImages/kalyani_dark-2.png')}
        />
      </View>
      <View style={styles.textContainer}>
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
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  image: {
    width: 173,
    height: 69,
    paddingHorizontal: '10%',
  },
  textContainer: {
    marginVertical: 20,
  },
  text: {
    color: '#010068',
    textAlign: 'center',
    fontSize: 17,

    fontFamily: 'Outfit-Bold',
  },
});
