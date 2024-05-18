import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';
import {ImageSourcePropType} from 'react-native';
import React, {useEffect, useRef} from 'react';

type boxModalTypes = {
  header?: string;
  title?: string;
  placeholder: string;
  footerText: string;
  footerimage?: ImageSourcePropType;
  buttonimage?: ImageSourcePropType;
  onChangeMobileNumber: (text: string) => void;
  mobileNumber: string;
  isValidMobileNumber: boolean;
  handlePress: () => void;
};

const InputBoxModal = (props: boxModalTypes) => {
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

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isValidMobileNumber && inputRef.current) {
      inputRef.current.blur();
    }
  }, [isValidMobileNumber]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{header}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          ref={inputRef}
          style={styles.inputBox}
          placeholder={placeholder}
          keyboardType="number-pad"
          onChangeText={onChangeMobileNumber}
          value={mobileNumber}
        />
      </View>
      <View style={styles.footerContainer}>
        <Image style={styles.footerImage} source={footerimage} />
        <Text style={styles.footerText}>{footerText}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            handlePress();
            if (inputRef.current) {
              inputRef.current.clear();
            }
          }}>
          <View
            style={[
              styles.buttonInner,
              {backgroundColor: isValidMobileNumber ? '#6060EF' : '#D7D7DD'},
            ]}>
            <Image style={styles.arrowButton} source={buttonimage} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default InputBoxModal;

const styles = StyleSheet.create({
  container: {
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
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  body: {gap: 10},
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  inputBox: {
    width: 285,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingLeft: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 5,
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
    top: 5,
  },
  buttonInner: {
    borderRadius: 22,
    height: 44,
    width: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButton: {height: 16, width: 16},
});
