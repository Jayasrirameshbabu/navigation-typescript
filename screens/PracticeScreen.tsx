import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';

type practiceScreenTypes = NativeStackScreenProps<
  stackScreens,
  'PracticeScreen'
>;

const PracticeScreen = (props: practiceScreenTypes) => {
  const {navigation} = props;
  return (
    // <View style={styles.container}>
    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       height: '22%',
    //       marginHorizontal: 10,
    //       flexDirection: 'row',
    //       justifyContent: 'space-around',
    //       alignItems: 'center',
    //     }}>
    //     <View
    //       style={{backgroundColor: 'pink', width: '40%', height: '40%'}}></View>
    //     <View
    //       style={{
    //         backgroundColor: 'lightgreen',
    //         width: '40%',
    //         height: '40%',
    //       }}></View>
    //     <View
    //       style={{
    //         backgroundColor: 'lightgrey',
    //         width: '40%',
    //         height: '40%',
    //         position: 'absolute',
    //         top: 80,
    //         left: 130,
    //         // elevation: 5,
    //       }}></View>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: '#ffffe6',
    //       height: '22%',
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       marginHorizontal: 10,
    //     }}>
    //     <View
    //       style={{
    //         backgroundColor: 'red',
    //         height: 100,
    //         width: 100,
    //         borderRadius: 50,
    //         position: 'absolute',
    //         top: '70%',
    //         left: '10%',
    //         // zIndex: 15,
    //       }}></View>
    //     <View
    //       style={{
    //         backgroundColor: 'pink',
    //         height: 100,
    //         width: 100,
    //         borderRadius: 50,
    //         position: 'absolute',
    //         top: '70%',
    //         left: '40%',
    //       }}></View>
    //     <View
    //       style={{
    //         backgroundColor: '#ffff00',
    //         height: 100,
    //         width: 100,
    //         borderRadius: 50,
    //         position: 'absolute',
    //         top: '70%',
    //         left: '70%',
    //       }}></View>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'green',
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       height: '22%',
    //       borderBottomLeftRadius: 50,
    //       borderBottomRightRadius: 50,
    //       marginHorizontal: 10,
    //     }}>
    //     <View
    //       style={{
    //         height: 100,
    //         width: 100,
    //         backgroundColor: '#cc66ff',
    //         borderRadius: 50,
    //         position: 'absolute',
    //         top: 100,
    //       }}></View>
    //     <View
    //       style={{
    //         height: 100,
    //         width: 100,
    //         backgroundColor: '#3399ff',
    //         position: 'absolute',
    //         top: 100,
    //         left: 150,
    //       }}></View>
    //     <View
    //       style={{
    //         height: 100,
    //         width: 100,
    //         backgroundColor: '#ff1a1a',
    //         borderRadius: 50,
    //         position: 'absolute',
    //         top: 100,
    //         left: 300,
    //       }}></View>
    //   </View>
    // </View>
    <View style={styles.container}>
      <View style={[styles.box]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            height: '50%',
          }}>
          <View style={{width: '45%', backgroundColor: 'blue'}}></View>
          <View style={{width: '45%', backgroundColor: 'pink'}}></View>
        </View>
        <View
          style={{
            width: '50%',
            height: '50%',
            backgroundColor: 'white',
            alignSelf: 'center',
            bottom: 50,
          }}></View>
      </View>
      <View style={[styles.box]}>
        <View
          style={{
            height: '60%',
            margin: 10,
            backgroundColor: 'yellow',
            // position: 'absolute',
            // zIndex: 2,
          }}></View>
        <View
          style={{
            width: '100%',
            height: '40%',

            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 30,
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: '#49d659',
            }}></View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: '#49d659',
            }}></View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: '#49d659',
            }}></View>
        </View>
      </View>

      <View style={[styles.box]}>
        <View
          style={{
            backgroundColor: 'lightblue',
            height: '60%',

            margin: 10,
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
            // zIndex: 1,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '40%',

            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 30,
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: '#49d659',
            }}></View>
          <View
            style={{
              height: 100,
              width: 100,

              backgroundColor: '#191f19',
            }}></View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: '#49d659',
            }}></View>
        </View>
      </View>
      <Button
        title="Press me"
        onPress={() => navigation.navigate('WelcomeScreen')}
      />
    </View>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-around',
    backgroundColor: '#e4ede5',
    marginBottom: 20,
  },
  box: {
    width: '100%',
    height: '30%',
  },
});
