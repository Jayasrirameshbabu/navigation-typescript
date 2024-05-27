import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {buttonProps} from '../../types';

const CustomButton = (props: buttonProps) => {
  const {title, image, onPress, buttonStyle, imageStyle, textStyle} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, buttonStyle]}>
      <View style={styles.buttonContent}>
        {image && (
          <Image style={[styles.buttonImage, imageStyle]} source={image} />
        )}
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonImage: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default CustomButton;
