import {ImageSourcePropType, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type CategoryCardTypes = {
  id?: number;
  title: string;
  image: ImageSourcePropType;
};
const ServiceCategoryComponent = (props: CategoryCardTypes) => {
  const {title, image} = props;

  return (
    <View style={styles.listItem}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default ServiceCategoryComponent;

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: '3%',
    marginVertical: '2%',
    alignItems: 'center',
    width: 70,
    height: 120,

    borderRadius: 20,
    paddingVertical: 12,
    marginLeft: 5,
  },
  imageContainer: {
    width: 75,
    height: 75,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000000',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 40,
    objectFit: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  text: {
    fontSize: 11,
    fontFamily: 'Outfit-Regular',
    color: '#000000',
  },
});
