import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../Navigation/Stack/AllScreens';

type propsType = NativeStackScreenProps<stackScreens, 'Screen2'>;

const Screen2 = ({navigation, route}: propsType) => {
  const {info} = route.params;
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
      <Text>{info}</Text>
      <Button
        title="FetchData"
        onPress={() => navigation.navigate('FetchData')}
      />
    </View>
  );
};

export default Screen2;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
  },
});
