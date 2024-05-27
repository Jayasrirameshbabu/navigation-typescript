import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

type headerPropTypes = {
  title: string;
  onPress: () => void;
  image?: ImageSourcePropType;

  imageStyle?: object;
};
const Header = (props: headerPropTypes) => {
  const {title, onPress} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View>
          <Pressable onPress={onPress}>
            <Image
              source={require('../../assests/Images/WishListImages/arrow_back.png')}
            />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',

    marginHorizontal: '5%',
  },
  textContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Outfit-Medium',
  },
  imageSection: {
    paddingVertical: '2%',
  },
});
