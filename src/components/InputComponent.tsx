import {TextInput, View, Image} from 'react-native';
import React from 'react';
import {inputBox} from '../../types';
import {Dropdown} from 'react-native-element-dropdown';

const InputComponent = (props: inputBox) => {
  const {
    placeholder,
    image,
    inputSectionStyle,
    inputImageStyle,
    inputTextStyle,
    onChangeText = () => {},
    dropdownData = [],
    onDropdownChange = () => {},
    isDropdown,
    iconStyle,
    value,
  } = props;
  return (
    <View style={inputSectionStyle}>
      {image && (
        <View>
          <Image source={image} style={inputImageStyle} />
        </View>
      )}
      {!isDropdown ? (
        <TextInput
          placeholder={placeholder}
          style={[inputTextStyle, {flex: 1}]}
          placeholderTextColor={'#A3A3AC'}
          value={value}
          onChangeText={text => {
            onChangeText(text);
          }}
          editable
        />
      ) : (
        <Dropdown
          data={dropdownData}
          labelField="name"
          valueField="id"
          placeholder={placeholder}
          style={[inputTextStyle, {flex: 1}]}
          placeholderStyle={{color: '#A3A3AC'}}
          selectedTextStyle={{color: '#000'}}
          containerStyle={{maxHeight: 200}}
          onChange={onDropdownChange}
          iconColor={'#000000'}
          iconStyle={iconStyle}
        />
      )}
    </View>
  );
};

export default InputComponent;
