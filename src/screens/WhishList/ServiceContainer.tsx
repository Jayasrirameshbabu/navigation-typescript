import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ListItemWishList from '../../components/ListItemWishList';
import commonStyles from '../../../styles';

const data = [
  {
    id: 1,
    image: require('../../../assests/Images/WishListImages/Group-371.png'),
    title: 'FRONX TURBO SMART HYBRID ALPHA 1L 6AT ESP',
    price: 954000,
  },
  {
    id: 2,
    image: require('../../../assests/Images/WishListImages/Group-372.png'),
    title: 'BALENO ZETA 1L 6AT ESP',
    price: 738000,
  },
  {
    id: 3,
    image: require('../../../assests/Images/WishListImages/Group-373.png'),
    title: 'CELERIO ZXI 5MT',
    price: 738000,
  },
];
const ServiceContainer = () => {
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
    </View>
  );
};

export default ServiceContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listBody: {
    flexDirection: 'row',
    marginHorizontal: 12,

    marginVertical: 10,
    width: '80%',
  },
});
