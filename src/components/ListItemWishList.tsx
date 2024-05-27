import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {getCommaPrice} from '../screens/PaymentScreen/PaymentsScreen';
import {wishlistITemProps} from '../../types';
import commonStyles from '../../styles';

const ListItemWishList = (props: wishlistITemProps) => {
  const {
    title,
    price,
    image,
    listItemStyles,
    imageStyles,
    imageContainerStyles,
    titleStyles,
    priceStyles,
    headerContainerStyles,
    priceTag,
    listBodyStyles,
  } = props;
  return (
    <View style={[commonStyles.listItem, listItemStyles]}>
      <View style={listBodyStyles}>
        <View style={imageContainerStyles}>
          <Image style={imageStyles} source={image} />
        </View>
        <View style={headerContainerStyles}>
          <Text style={titleStyles}>{title}</Text>
          <View style={styles.priceContainer}>
            <Text style={priceStyles}>{priceTag}</Text>
            <Text style={priceStyles}>{getCommaPrice(price)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListItemWishList;

const styles = StyleSheet.create({
  listBody: {
    flexDirection: 'row',
    marginHorizontal: 12,

    marginVertical: 10,
    width: '80%',
  },

  priceContainer: {
    flexDirection: 'row',
  },
});
