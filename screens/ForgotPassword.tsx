// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Pressable,
// } from 'react-native';
// import React from 'react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {stackScreens} from '../types';
// import OTPTextInput from 'react-native-otp-textinput';

// type ForgotPasswordScreenTypes = NativeStackScreenProps<
//   stackScreens,
//   'ForgotPasswordScreen'
// >;

// const ForgotPasswordScreen = (props: ForgotPasswordScreenTypes) => {
//   const {navigation} = props;
//   return (
//     <View>
//       <ImageBackground
//         style={styles.backgroundImage}
//         resizeMode="stretch"
//         source={require('../assests/Images/Vector5.png')}>
//         <View style={styles.container}>
//           <View>
//             <Image
//               style={styles.image}
//               source={require('../assests/Images/kalyani_dark.png')}
//             />
//           </View>
//           <View>
//             <Text style={styles.text}>Karnataka’s No.1 </Text>
//             <Text style={styles.text}>Maruti Suzuki Dealership</Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text style={styles.loginText}>Enter Login Password</Text>
//             <Text>Enter 6 digit Password</Text>
//             <OTPTextInput
//               containerStyle={styles.inputTextContainer}
//               textInputStyle={styles.otpInputText}
//               inputCount={6}
//             />
//             <View style={styles.forgotPasswordContainer}>
//               <Image
//                 style={[styles.helpImage]}
//                 source={require('../assests/Images/help.png')}
//                 tintColor={'#4000FF'}
//               />
//               <Pressable>
//                 <Text style={styles.resendText}>FORGOT PASSWORD</Text>
//               </Pressable>
//             </View>
//             <View style={styles.outerView}>
//               <Pressable
//                 style={[
//                   {
//                     backgroundColor: '#D7D7DD',
//                   },

//                   styles.innerVIew,
//                 ]}
//                 onPress={() => navigation.navigate('ForgotPasswordScreen')}>
//                 <View style={styles.innerVIew}>
//                   <Image
//                     style={styles.rightImage}
//                     source={require('../assests/Images/arrow_right_alt.png')}
//                   />
//                 </View>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default ForgotPasswordScreen;

// const styles = StyleSheet.create({
//   backgroundImage: {
//     // width: 375,
//     height: 475,
//   },
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   image: {
//     height: 69,
//     width: 173,
//     marginBottom: 20,
//   },
//   text: {
//     color: '#010068',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   inputContainer: {
//     height: 240,
//     width: 350,
//     position: 'relative',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     top: 60,
//     elevation: 6,
//     padding: 20,
//     gap: 10,
//   },
//   modifyText: {
//     fontSize: 10,
//     color: 'red',
//     textDecorationLine: 'underline',
//   },
//   loginText: {
//     color: '#000000',
//     fontSize: 13,
//     fontWeight: '500',
//     alignSelf: 'center',
//   },
//   icon: {
//     height: 16,
//     width: 16,
//   },
//   helpText: {
//     color: '#000000',
//     fontSize: 11,
//     fontWeight: '500',
//   },

//   inputText: {
//     width: 285,
//     height: 40,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     paddingLeft: 15,
//   },
//   resendOtp: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     height: '25%',
//   },
//   resendText: {
//     color: '#0000FF',
//     fontSize: 11,
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   rightImage: {
//     height: 24,
//     width: 24,

//     alignSelf: 'center',
//     // color: 'red',
//   },
//   arrowContainer: {
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   outerView: {
//     backgroundColor: '#EEEEEE',
//     borderRadius: 40,
//     height: 80,
//     width: 80,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   innerVIew: {
//     backgroundColor: '#6D6DF0',
//     borderRadius: 30,
//     height: 60,
//     width: 60,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputFeild: {
//     width: 10,
//   },
//   inputTextContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//   },
//   otpInputText: {
//     flex: 1,

//     // paddingHorizontal: 10, // Adjust padding as needed
//   },
//   forgotPasswordContainer: {
//     marginTop: 20,
//     flexDirection: 'row',
//     gap: 10,
//   },
//   helpImage: {
//     height: 20,
//     width: 20,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';
import OTPTextInput from 'react-native-otp-textinput';

type OtpScreenTypes = NativeStackScreenProps<stackScreens, 'OtpScreen'>;

const OtpScreen = (props: OtpScreenTypes) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BackgroundImage />
        <View style={styles.Otpcontainer}>
          <View>
            <View>
              <Text style={styles.header}>Enter Login Password</Text>
            </View>
            <Text style={styles.title}>Enter 6 digit Password</Text>
            <OTPTextInput
              containerStyle={styles.inputTextContainer}
              textInputStyle={styles.otpInputText}
              inputCount={6}
            />
            <View style={styles.footerContainer}>
              <Image
                style={styles.footerImage}
                source={require('../assests/Images/help.png')}
              />
              <Text style={styles.footerText}>FORGOT PASSWORD</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <View style={[styles.buttonInner]}>
                  <Image
                    style={styles.arrowButton}
                    source={require('../assests/Images/arrow_right_alt.png')}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  Otpcontainer: {
    width: 350,
    height: 230,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    top: -100,
    elevation: 6,
    padding: 20,
    gap: 20,
    zIndex: 10,
    left: 30,
  },
  header: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  title: {fontSize: 12, fontWeight: '600', color: '#000000', marginTop: 20},
  modifyText: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '800',
  },
  inputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  otpInputText: {
    flex: 1,
  },
  resendOtp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '25%',
    marginTop: 30,
  },
  resendText: {
    color: '#0000FF',
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000000',
  },
  footerImage: {
    height: 18,
    width: 18,
  },
  buttonContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
    height: 60,
    width: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  buttonInner: {
    borderRadius: 22,
    height: 44,
    width: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D6DF0',
  },
  arrowButton: {height: 16, width: 16},
});
