import {StyleSheet, View} from 'react-native';
import React from 'react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {stackScreens} from '../types';

// type flexLayoutTypes = NativeStackScreenProps<stackScreens, 'FlexLayout'>;
const FlexLayout = () => {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          width: '40%',
          height: '25%',
          backgroundColor: 'red',
          margin: '5%',
        }}
      />
      <View
        style={{
          width: '40%',
          height: '25%',
          backgroundColor: 'blue',
          margin: '5%',
        }}
      />

      <View
        style={{
          width: '40%',
          height: '25%',
          backgroundColor: 'green',
          margin: '5%',
          position: 'absolute',
          top: 80,
          left: 50,
        }}
      />
      <View
        style={{
          width: '40%',
          height: '25%',
          backgroundColor: 'yellow',
          margin: '5%',
          position: 'absolute',
          top: 80,
          left: 250,
        }}
      /> */}

      {/* <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 2, backgroundColor: '#E1E1FF'}} />
        <View style={{flex: 2, backgroundColor: '#FFF5EE'}} />
      </View> */}

      <View style={styles.firstRow}>
        <View style={{flex: 1, backgroundColor: 'orange', height: '80%'}} />
        <View style={{flex: 2, backgroundColor: 'blue', height: '80%'}} />
      </View>
      <View style={styles.firstRow}>
        <View style={{flex: 3, backgroundColor: 'yellow', height: '80%'}} />
        <View style={{flex: 4, backgroundColor: 'pink', height: '80%'}} />
      </View>
      <View style={styles.firstRow}>
        <View style={{flex: 1, backgroundColor: '#008B8B', height: '80%'}} />
      </View>
      <View style={styles.firstRow}>
        <View style={{flex: 4, backgroundColor: '#FF7F50', height: '100%'}} />
        <View style={{flex: 4, gap: 10}}>
          <View style={{flex: 2, backgroundColor: '#B8860B', height: '10%'}} />
          <View style={{flex: 2, backgroundColor: '#00FFFF', height: '10%'}} />
        </View>
        <View style={{flex: 4, gap: 10}}>
          <View style={{flex: 2, backgroundColor: '#228B22', height: '10%'}} />
          <View style={{flex: 2, backgroundColor: '#ADFF2F', height: '10%'}} />
        </View>
        <View style={{flex: 4, backgroundColor: '#9932CC', height: '100%'}} />
      </View>
      <View style={[styles.firstRow, {marginVertical: 20}]}>
        <View style={{flex: 4, backgroundColor: '#48D1CC', height: '100%'}} />
      </View>
    </View>
  );
};

export default FlexLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8d8f6',
    flexDirection: 'column',
    flexWrap: 'wrap',

    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
    // alignContent: 'stretch',
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',

    gap: 10,
  },
  firstHalf: {
    flex: 4,
    backgroundColor: '#E1E1FF',
    borderBottomRightRadius: 50,
    // borderBottomLeftRadius: 50,
  },
  secondHalf: {
    flex: 2,
    backgroundColor: '#FFF5EE',
    borderTopLeftRadius: 50,
  },
});
