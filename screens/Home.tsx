import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../Navigation/Stack/AllScreens';

type propsType = NativeStackScreenProps<stackScreens, 'Home'>;
const Home = (props: propsType) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button
        title="Go to Screen1"
        onPress={() => navigation.navigate('Screen1', {msg: 'Hello from Home'})}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
  },
});
