import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../Navigation/Stack/AllScreens';

type propsType = NativeStackScreenProps<stackScreens, 'Card'>;

const Card = (props: propsType) => {
  const {navigation, route} = props;
  return (
    <View style={styles.container}>
      <Text>Card</Text>
      <Text>{route.params.title}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
