import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';

type NoPaymentsScreenTypes = NativeStackScreenProps<
  stackScreens,
  'NoPaymentsScreen'
>;
const NoPaymentsScreen = (props: NoPaymentsScreenTypes) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../assests/Images/attachment.png')}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Looks like you haven’t </Text>
        <Text style={styles.text}>made any transactions</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <View style={styles.button}>
          <Text style={styles.text}>Explore Products</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default NoPaymentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    height: 150,
    width: 150,
    bottom: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E4E3',
    borderRadius: 12,
    height: 44,
    width: 164,
    bottom: 30,
  },
  text: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'outfit',
  },
  textContainer: {
    bottom: 50,
  },
});
