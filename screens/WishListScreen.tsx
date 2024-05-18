// import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
// import React, {useState} from 'react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {stackScreens} from '../types';

// type WishListScreenTypes = NativeStackScreenProps<
//   stackScreens,
//   'WishListScreen'
// >;

// const WishListScreen = () => {
//   const [selectedTab, setSelectedTab] = useState<string | null>(null);
//   return (
//     <View style={styles.container}>
//       <View style={styles.btnContainer}>
//         <Pressable onPress={() => setSelectedTab('Cars')}>
//           <View style={styles.button}>
//             <Text>Cars</Text>
//           </View>
//         </Pressable>
//         <Pressable onPress={() => setSelectedTab('Services')}>
//           <View style={styles.button}>
//             <Text>Services</Text>
//           </View>
//         </Pressable>
//       </View>

//       <View>
//         <View style={styles.imageContainer}>
//           <Image
//             style={styles.image}
//             source={require('../assests/Images/attachment.png')}
//           />
//         </View>
//         <View style={styles.textContainer}>
//           <Text style={styles.text}>Looks like you haven’t </Text>
//           <Text style={styles.text}>made any transactions</Text>
//           <Pressable>
//             <View style={[styles.button, {marginVertical: 50}]}>
//               <Text style={styles.text}>Explore Products</Text>
//             </View>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default WishListScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btnContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     height: '30%',
//     // gap: 20,
//   },
//   button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#E4E4E3',
//     borderRadius: 12,
//     height: 44,
//     width: 164,
//     // bottom: 10,
//   },
//   imageContainer: {
//     height: '30%',
//     alignItems: 'center',
//     bottom: 80,
//   },
//   image: {
//     height: 150,
//     width: 150,
//   },
//   textContainer: {
//     // bottom: 50,
//     alignItems: 'center',
//     height: '20%',
//     bottom: 100,
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'black',
//   },
// });
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';
import CarsContainer from './CarsContainer';

type WishListScreenTypes = NativeStackScreenProps<
  stackScreens,
  'WishListScreen'
>;

const WishListScreen = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [buttonClicked, setButtonClick] = useState<boolean>(false);

  const renderContent = () => {
    if (selectedTab === 'Cars') {
      return (
        <View style={styles.contentContainer}>
          <CarsContainer />
        </View>
      );
    } else if (selectedTab === 'Services') {
      return (
        <View style={styles.contentContainer}>
          <Text>Services Component</Text>
          {/* Replace with your actual Services component */}
        </View>
      );
    } else {
      return (
        <View style={styles.defaultContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assests/Images/attachment.png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Looks like you haven’t </Text>
            <Text style={styles.text}>made any transactions</Text>
            <Pressable>
              <View style={[styles.button, {marginVertical: 50}]}>
                <Text style={styles.text}>Explore Products</Text>
              </View>
            </Pressable>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Pressable style={styles.button} onPress={() => setSelectedTab('Cars')}>
          <Text>Cars</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setSelectedTab('Services')}>
          <Text>Services</Text>
        </Pressable>
      </View>
      {renderContent()}
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    // justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '20%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E4E3',
    borderRadius: 12,
    height: 44,
    width: 164,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    // height: '30%',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  textContainer: {
    alignItems: 'center',
    height: '20%',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
