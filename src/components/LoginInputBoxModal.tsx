import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  Keyboard,
} from 'react-native';
import {boxModalTypes} from '../../types';
import React from 'react';
import commonStyles from '../../styles';

const LoginInputBoxModal = (props: boxModalTypes) => {
  const {
    header,
    title,
    placeholder,
    footerText,
    footerimage,
    buttonimage,
    onChangeMobileNumber,
    mobileNumber,
    isValidMobileNumber,
    handlePress,
  } = props;

  const hnadleFilled = (mobileNum: string) => {
    if (mobileNum.length === 10) {
      Keyboard.dismiss();
    }
  };
  return (
    <View style={commonStyles.Boxcontainer}>
      <View>
        <Text style={styles.header}>{header}</Text>
      </View>
      <View style={styles.body}>
        <Text style={commonStyles.title}>{title}</Text>
        <TextInput
          style={commonStyles.inputBox}
          placeholder={placeholder}
          keyboardType="number-pad"
          onChangeText={mobilenumber => {
            onChangeMobileNumber(mobilenumber);
            hnadleFilled(mobilenumber);
          }}
          value={mobileNumber}
          placeholderTextColor={'#A3A3AC'}
        />
      </View>
      <View style={styles.footerContainer}>
        <Image style={styles.footerImage} source={footerimage} />
        <Text style={styles.footerText}>{footerText}</Text>
      </View>

      <View style={[commonStyles.buttonContainer, {marginTop: 10}]}>
        <Pressable
          onPress={() => {
            handlePress();
          }}>
          <View
            style={[
              commonStyles.buttonInner,
              {backgroundColor: isValidMobileNumber ? '#6060EF' : '#D7D7DD'},
            ]}>
            <Image style={commonStyles.arrowButton} source={buttonimage} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginInputBoxModal;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Outfit-Medium',
  },
  body: {gap: 10},

  footerContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Outfit-Regular',
  },
  footerImage: {
    height: 18,
    width: 18,
    marginLeft: 5,
  },
});
