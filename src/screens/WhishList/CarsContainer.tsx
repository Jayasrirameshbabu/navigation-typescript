import {FlatList, StyleSheet, View, Text} from 'react-native';
import React from 'react';

import ListItemWishList from '../../components/ListItemWishList';
import commonStyles from '../../../styles';

const CarsContainer = () => {
  const data = [
    {
      id: 1,
      image: require('../../../assests/Images/WishListImages/silky-silver1.png'),
      title: 'FRONX TURBO SMART...',
      price: 954000,
    },
    {
      id: 2,
      image: require('../../../assests/Images/WishListImages/silky-silver2.png'),
      title: 'BALENO ZETA 1L 6AT ESP',
      price: 738000,
    },
    {
      id: 3,
      image: require('../../../assests/Images/WishListImages/silky-silver3.png'),
      title: 'CELERIO ZXI 5MT',
      price: 738000,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({item}) => (
          <ListItemWishList
            listItemStyles={commonStyles.listItemStyles}
            listBodyStyles={styles.listBody}
            headerContainerStyles={commonStyles.headerContainer}
            titleStyles={commonStyles.listHeader}
            priceStyles={commonStyles.price}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        )}
        keyExtractor={item => JSON.stringify(item.id)}
      />
      <View style={{marginTop: 10}}>
        <Text style={styles.removeText}>Swipe to remove</Text>
      </View>
    </View>
  );
};

export default CarsContainer;

const styles = StyleSheet.create({
  container: {flex: 1},
  removeText: {
    fontFamily: 'Outfit-Medium',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#8A8A8A',
  },
  listBody: {
    flexDirection: 'row',
    marginHorizontal: 12,

    marginVertical: 10,
    width: '80%',
  },
});
