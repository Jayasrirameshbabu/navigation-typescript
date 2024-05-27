import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';
import ServiceCategoryComponent from '../../components/ServiceCategoryComponent';
import {getCommaPrice} from '../PaymentScreen/PaymentsScreen';
import commonStyles from '../../../styles';

type ServicesScreenTypes = NativeStackScreenProps<
  stackScreens,
  'ServicesScreen'
>;
const Services = (props: ServicesScreenTypes) => {
  const {navigation} = props;

  const ServicesData = [
    {
      id: 1,
      image: require('../../../assests/Images/ServiceScreenImages/Group-364.png'),
      title: 'Battery',
    },
    {
      id: 2,
      image: require('../../../assests/Images/ServiceScreenImages/Group-396.png'),
      title: 'Accessories',
    },
    {
      id: 3,
      image: require('../../../assests/Images/ServiceScreenImages/Group-364.png'),
      title: 'Battery',
    },
    {
      id: 4,
      image: require('../../../assests/Images/ServiceScreenImages/Group-392.png'),
      title: 'Body Repair',
    },
    {
      id: 5,
      image: require('../../../assests/Images/ServiceScreenImages/Group-384.png'),
      title: 'Accessories',
    },
    {
      id: 6,
      image: require('../../../assests/Images/ServiceScreenImages/Group-364.png'),
      title: 'A/C Services',
    },
  ];

  const data = [
    {
      id: 1,
      image: require('../../../assests/Images/ServiceScreenImages/Group-280.png'),
      title: 'Gas Leakage Check',
      price: '1500',
    },
    {
      id: 2,
      image: require('../../../assests/Images/ServiceScreenImages/Group-183.png'),
      title: 'A/C Condensor',
      price: '1500',
    },
    {
      id: 3,
      image: require('../../../assests/Images/ServiceScreenImages/image-33.png'),
      title: 'Gas Leakage Check',
      price: '1500',
    },
    {
      id: 4,
      image: require('../../../assests/Images/ServiceScreenImages/Group-183.png'),
      title: 'A/C Condensor',
      price: '1500',
    },
    {
      id: 5,
      image: require('../../../assests/Images/ServiceScreenImages/Group-280.png'),
      title: 'Gas Leakage Check',
      price: '1500',
    },
    {
      id: 6,
      image: require('../../../assests/Images/ServiceScreenImages/image-30.png'),
      title: 'Gas Leakage Check',
      price: '1500',
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#FFF"
        barStyle="dark-content"
        hidden={false}
      />
      <ScrollView
        nestedScrollEnabled={true}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <Header
          title="SERVICE"
          onPress={() => navigation.navigate('WishListScreen')}
        />
        <View style={styles.container}>
          <Image
            source={require('../../../assests/Images/ServiceScreenImages/Rectangle1970.png')}
            style={commonStyles.headerImageStyle}
          />

          <View style={{flex: 1}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={ServicesData}
              renderItem={({item}) => (
                <Pressable>
                  <ServiceCategoryComponent
                    id={item.id}
                    title={item.title}
                    image={item.image}
                  />
                </Pressable>
              )}
              keyExtractor={item => JSON.stringify(item.id)}
            />
          </View>
          <Image
            style={styles.borderImage}
            source={require('../../../assests/Images/ServiceScreenImages/Group-503.png')}
          />
          <Text
            style={[
              styles.itemTitle,
              {alignSelf: 'center', marginVertical: 10, paddingVertical: 5},
            ]}>
            AC SERVICES
          </Text>
          <View style={styles.listContainer}>
            {data.map(item => (
              <View key={item.id}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('ACServicesScreen', {
                      id: item.id,
                      image: item.image,
                      title: item.title,
                      price: item.price,
                    })
                  }>
                  <View key={item.id} style={styles.listItem}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={{paddingVertical: 5}}>
                      <Image style={styles.image} source={item.image} />
                    </View>
                    <View style={styles.footer}>
                      <Text style={styles.price}>Starts From : </Text>
                      <Text style={styles.price}>
                        {getCommaPrice(item.price)}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Outfit-SemiBold',
  },
  listContainer: {
    flex: 1,

    flexDirection: 'row',
    flexWrap: 'wrap',
    // paddingHorizontal: 3,

    marginBottom: 10,
  },
  listItem: {
    width: 170,

    height: 180,
    backgroundColor: '#F1F1F7',
    borderRadius: 16,

    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  itemTitle: {
    fontSize: 14,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
    alignSelf: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  price: {
    fontSize: 11,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
  },
  borderImage: {
    height: 2,
    width: 334,
    left: 17,
  },
});
