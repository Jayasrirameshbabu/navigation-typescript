import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
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

type ConfirmBookingScreenTypes = NativeStackScreenProps<
  stackScreens,
  'ConfirmBookingScreen'
>;
const ConfirmBookingScreen = (props: ConfirmBookingScreenTypes) => {
  const {navigation} = props;
  const Data = [
    {id: 1, name: 'Hello'},
    {id: 2, name: 'Hello'},
    {id: 3, name: 'Hello'},
  ];
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
          <View>
            <Text style={styles.title}>Choose Outlet</Text>
            <View>
              <InputComponent
                placeholder="Select City "
                inputSectionStyle={styles.inputSection}
                inputTextStyle={commonStyles.inputText}
                dropdownData={Data}
                onDropdownChange={item => console.log(item)}
                isDropdown={true}
                iconStyle={styles.iconStyle}
              />
              <InputComponent
                placeholder="Select Outlet "
                inputSectionStyle={styles.inputSection}
                inputTextStyle={commonStyles.inputText}
                dropdownData={Data}
                onDropdownChange={item => console.log(item)}
                isDropdown={true}
                iconStyle={styles.iconStyle}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>Address</Text>
            <View>
              <InputComponent
                placeholder="Select Address"
                inputSectionStyle={styles.inputSection}
                inputTextStyle={commonStyles.inputText}
                dropdownData={Data}
                onDropdownChange={item => console.log(item)}
                isDropdown={true}
                iconStyle={styles.iconStyle}
                image={require('../../../assests/Images/ServiceScreenImages/home.png')}
                inputImageStyle={styles.inputImage}
              />
            </View>
          </View>
          <Image
            style={styles.borderImage}
            source={require('../../../assests/Images/ServiceScreenImages/Group-503.png')}
          />
          <View>
            <Text style={styles.title}>Referred By</Text>
            <View>
              <InputComponent
                placeholder="Employee Name"
                inputSectionStyle={styles.inputSection}
                inputTextStyle={commonStyles.inputText}
                dropdownData={Data}
                onDropdownChange={item => console.log(item)}
                isDropdown={true}
                iconStyle={styles.iconStyle}
                image={require('../../../assests/Images/ServiceScreenImages/person_apron.png')}
                inputImageStyle={styles.inputImage}
              />
            </View>
            <View>
              <InputComponent
                placeholder="Employee ID"
                inputSectionStyle={styles.inputSection}
                inputTextStyle={commonStyles.inputText}
                dropdownData={Data}
                onDropdownChange={item => console.log(item)}
                isDropdown={true}
                iconStyle={styles.iconStyle}
                image={require('../../../assests/Images/ServiceScreenImages/id_card.png')}
                inputImageStyle={styles.inputImage}
              />
            </View>
          </View>
          <Image
            style={styles.borderImage}
            source={require('../../../assests/Images/ServiceScreenImages/Group-503.png')}
          />
          <View>
            <Text style={styles.title}>Select Slot</Text>
            <View>
              <InputComponent
                placeholder="Select Date"
                inputSectionStyle={styles.inputSection}
                inputTextStyle={commonStyles.inputText}
                dropdownData={Data}
                onDropdownChange={item => console.log(item)}
                isDropdown={true}
                iconStyle={styles.iconStyle}
                image={require('../../../assests/Images/ServiceScreenImages/event_note.png')}
                inputImageStyle={styles.inputImage}
              />
            </View>
            <View>
              <InputComponent
                placeholder="Select Time"
                inputSectionStyle={styles.inputSection}
                inputTextStyle={commonStyles.inputText}
                dropdownData={Data}
                onDropdownChange={item => console.log(item)}
                isDropdown={true}
                iconStyle={styles.iconStyle}
                image={require('../../../assests/Images/ServiceScreenImages/schedule.png')}
                inputImageStyle={styles.inputImage}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>Accept and Continue :</Text>
            <Text style={styles.acceptText}>
              I agree that by clicking the 'Submit' button below, I am
              explicitly soliciting a call and message via Whatsapp and any
              other medium from Kalyani Motors Pvt Ltd. or its partners on my
              'Mobile'.
            </Text>
            <Text style={styles.acceptText}>
              * Prices/Schemes prevailing at the time of invoice /bill shall be
              applicable.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <CustomButton
          title="Continue"
          buttonStyle={[styles.button1, {backgroundColor: '#6060EF'}]}
          textStyle={[styles.btnText1, {color: '#F2F2F2'}]}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmBookingScreen;

const styles = StyleSheet.create({
  container: {
    padding: '3%',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Outfit-Medium',
    paddingHorizontal: 8,
    paddingVertical: 5,
    color: '#000000',
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    borderColor: '#DBDBDB',

    borderRadius: 12,

    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  iconStyle: {
    height: 24,
    width: 24,
  },
  inputImage: {
    height: 18,
    width: 18,
    objectFit: 'contain',
  },
  inputText: {
    fontSize: 13,
    fontFamily: 'Outfit-Regular',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  borderImage: {
    height: 2,
    width: 342,

    marginVertical: 10,
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
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
  },
  acceptText: {
    fontSize: 11,
    fontFamily: 'outfit-Regular',
    paddingHorizontal: 8,
    color: '#000000',
  },
});
