import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CarsContainer = () => {
  const data = [
    {
      id: 1,
      image: '',
      title: 'FRONX TURBO SMART',
      price: 954000,
    },
    {
      id: 2,
      image: '',
      title: 'BALENO ZETA 1L 6AT ESP',
      price: 738000,
    },
    {
      id: 3,
      image: '',
      title: 'CELERIO ZXI 5MT',
      price: 738000,
    },
  ];
  return (
    <View style={styles.container}>
      <Text>CarsContainer</Text>
      <FlatList data={data} renderItem={item => item} />
    </View>
  );
};

export default CarsContainer;

const styles = StyleSheet.create({
  container: {flex: 1},
});
