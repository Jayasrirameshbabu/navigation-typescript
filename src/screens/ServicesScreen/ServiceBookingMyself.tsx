import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';
import InputComponent from '../../components/InputComponent';
import commonStyles from '../../../styles';
import CustomButton from '../../components/ButtonComponent';

type ServiceBookingScreenTypes = NativeStackScreenProps<
  stackScreens,
  'ServiceBookingMyselfScreen'
>;
const ServiceBookingMyself = (props: ServiceBookingScreenTypes) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <StatusBar
        backgroundColor="#FFF"
        barStyle="dark-content"
        hidden={false}
      />
      <ScrollView nestedScrollEnabled={true} stickyHeaderIndices={[0]}>
        <Header title="E-Booking" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={route.params.image} />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{route.params.title}</Text>
              <Text style={styles.price}>
                Starts From : {route.params.price} /-
              </Text>
            </View>
          </View>
          <Image
            style={styles.borderImage}
            source={require('../../../assests/Images/ServiceScreenImages/Group-503.png')}
          />
          <Text
            style={[
              styles.title,
              {color: '#23006F', marginHorizontal: 20, marginVertical: 10},
            ]}>
            Personal Details
          </Text>
          <View style={styles.personalDetailsSection}>
            <InputComponent
              image={require('../../../assests/Images/ServiceScreenImages/person.png')}
              placeholder="Name"
              inputSectionStyle={[
                commonStyles.inputSectionStyle,
                {marginVertical: 10},
              ]}
              inputImageStyle={styles.inputImage}
              inputTextStyle={styles.inputText}
            />
            <InputComponent
              image={require('../../../assests/Images/ServiceScreenImages/mail.png')}
              placeholder="E Mail ID"
              inputSectionStyle={commonStyles.inputSectionStyle}
              inputImageStyle={styles.inputImage}
              inputTextStyle={styles.inputText}
            />
            <InputComponent
              image={require('../../../assests/Images/ServiceScreenImages/call.png')}
              placeholder="Phone Number"
              inputSectionStyle={[
                commonStyles.inputSectionStyle,
                {marginVertical: 10},
              ]}
              inputImageStyle={styles.inputImage}
              inputTextStyle={styles.inputText}
            />
          </View>
          <Text
            style={[
              styles.title,
              {color: '#23006F', marginHorizontal: 20, marginVertical: 10},
            ]}>
            Vehicle Details
          </Text>
          <View style={styles.personalDetailsSection}>
            <InputComponent
              image={require('../../../assests/Images/ServiceScreenImages/app_registration.png')}
              placeholder="Vehicle Registration Number"
              inputSectionStyle={[
                commonStyles.inputSectionStyle,
                {marginVertical: 10},
              ]}
              inputImageStyle={styles.inputImage}
              inputTextStyle={styles.inputText}
            />
            <InputComponent
              image={require('../../../assests/Images/ServiceScreenImages/directions_car.png')}
              placeholder="Model"
              inputSectionStyle={commonStyles.inputSectionStyle}
              inputImageStyle={styles.inputImage}
              inputTextStyle={styles.inputText}
            />
            <InputComponent
              image={require('../../../assests/Images/ServiceScreenImages/no_crash.png')}
              placeholder="Variant"
              inputSectionStyle={[
                commonStyles.inputSectionStyle,
                {marginVertical: 10},
              ]}
              inputImageStyle={styles.inputImage}
              inputTextStyle={styles.inputText}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <CustomButton
          title="Continue"
          buttonStyle={[styles.button1, {backgroundColor: '#6060EF'}]}
          textStyle={[styles.btnText1, {color: '#F2F2F2'}]}
          onPress={() => navigation.navigate('ConfirmBookingScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ServiceBookingMyself;

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    // flex: 1,
    // backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#F4F4FF',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 12,
    elevation: 1,
  },
  imageContainer: {
    height: 80,
    width: 80,
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    objectFit: 'contain',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
  },
  price: {
    fontSize: 13,
    fontFamily: 'Outfit-Regular',
    color: '#000000',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  borderImage: {
    height: 2,
    width: 342,
    left: 9,
    marginTop: 3,
  },
  personalDetailsSection: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#F1F1F7',
    borderRadius: 16,
  },

  inputImage: {
    height: 20,
    width: 20,
    objectFit: 'contain',
    marginHorizontal: 10,
  },
  inputText: {
    fontSize: 15,
    fontFamily: 'Outfit-Regular',
  },
  button1: {
    justifyContent: 'center',
    backgroundColor: '#E1E1FF',
    borderRadius: 15,
    height: 50,
    width: '47%',
  },
  btnText1: {color: '#1E2839', fontSize: 18, fontFamily: 'Outfit-Medium'},
  btnContainer: {
    backgroundColor: '#fff',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
  },
});
