import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../Navigation/Stack/AllScreens';

type propsType = NativeStackScreenProps<stackScreens, 'Screen1'>;

const Screen1 = (props: propsType) => {
  const {navigation, route} = props;
  const {msg} = route.params;
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <Text>{msg}</Text>
      <Button
        title="Go to Screen2"
        onPress={() =>
          navigation.navigate('Screen2', {info: 'I am from Screen2'})
        }
      />
    </View>
  );
};

export default Screen1;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
  },
});
