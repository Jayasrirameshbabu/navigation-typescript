import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';
import React, {useState} from 'react';
import Header from '../../components/Header';
import commonStyles from '../../../styles';
import CustomButton from '../../components/ButtonComponent';
import {getCommaPrice} from '../PaymentScreen/PaymentsScreen';
import ServiceBookingModal from '../../components/ServiceBookingModal';

type ACServiceScreenTypes = NativeStackScreenProps<
  stackScreens,
  'ACServicesScreen'
>;

const ACServices = (props: ACServiceScreenTypes) => {
  const {navigation, route} = props;
  const [visibleCount, setVisibleCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const listData = [
    {title: 'A/C Gas Leakage Check'},
    {title: 'A/C Cooling Check-Up'},
    {title: 'Final Inspection'},
    {title: 'A/C Gas Leakage Check'},
    {title: 'A/C Cooling Check-Up'},
    {title: 'Final Inspection'},
    {title: 'A/C Gas Leakage Check'},
    {title: 'A/C Cooling Check-Up'},
    {title: 'Final Inspection'},
    {title: 'A/C Gas Leakage Check'},
    {title: 'A/C Cooling Check-Up'},
    {title: 'Final Inspection'},
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
  const toggleItems = () => {
    if (isExpanded) {
      setVisibleCount(3);
    } else {
      setVisibleCount(listData.length);
    }
    setIsExpanded(!isExpanded);
  };
  const handleBookNow = () => {
    setIsModalVisible(true);
  };
  const handleWhishList = () => {
    setIsWishlisted(!isWishlisted);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <StatusBar
        backgroundColor="#FFF"
        barStyle="dark-content"
        hidden={false}
      />
      <ScrollView nestedScrollEnabled={true} stickyHeaderIndices={[0]}>
        <Header
          title="AC SERVICE"
          onPress={() => navigation.navigate('ServicesScreen')}
        />
        <View style={styles.container}>
          <Image
            source={require('../../../assests/Images/ServiceScreenImages/Rectangle1970.png')}
            style={commonStyles.headerImageStyle}
          />
          <View>
            <View style={styles.headerContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={route.params.image} />
              </View>
              <View style={styles.content}>
                <Text style={styles.header}>{route.params.title}</Text>
                <Text style={styles.price}>
                  Starts from : {getCommaPrice(route.params.price)}
                </Text>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <CustomButton
                title={isWishlisted ? 'Wishlisted' : 'Wishlist'}
                buttonStyle={isWishlisted ? styles.button2 : styles.button1}
                textStyle={isWishlisted ? styles.btnText2 : styles.btnText1}
                onPress={handleWhishList}
                image={
                  isWishlisted
                    ? require('../../../assests/Images/ServiceScreenImages/check.png')
                    : null
                }
                imageStyle={styles.checkImage}
              />
              <CustomButton
                title="Book Now"
                buttonStyle={[styles.button1, {backgroundColor: '#6060EF'}]}
                textStyle={[styles.btnText1, {color: '#F2F2F2'}]}
                onPress={handleBookNow}
              />
            </View>
            <View style={styles.listContent}>
              <Text style={styles.aboutText}>ABOUT</Text>
              <View>
                <FlatList
                  scrollEnabled={false}
                  data={listData.slice(0, visibleCount)}
                  renderItem={({item}) => {
                    return (
                      <View>
                        <Text
                          style={
                            styles.listItem
                          }>{`\u2022   ${item.title}`}</Text>
                      </View>
                    );
                  }}
                />
                {listData.length > 3 && (
                  <Pressable onPress={toggleItems}>
                    <Text style={styles.readMore}>
                      {isExpanded ? 'Read Less....' : 'Read More....'}
                    </Text>
                  </Pressable>
                )}
              </View>
            </View>
            <View>
              <Image
                style={styles.borderImage}
                source={require('../../../assests/Images/ServiceScreenImages/Group-503.png')}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={styles.relatedText}>RELATED SERVICES</Text>
              <View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={data}
                  renderItem={({item}) => (
                    <View>
                      <Pressable
                        onPress={() => navigation.navigate('ServicesScreen')}>
                        <View key={item.id} style={styles.listItemContainer}>
                          <Text style={styles.itemTitle}>{item.title}</Text>
                          <View style={{paddingVertical: 5}}>
                            <Image style={styles.image1} source={item.image} />
                          </View>
                          <View style={styles.footer}>
                            <Text style={styles.price1}>Starts From : </Text>
                            <Text style={styles.price1}>
                              {getCommaPrice(item.price)}
                            </Text>
                          </View>
                        </View>
                      </Pressable>
                    </View>
                  )}
                  keyExtractor={item => JSON.stringify(item.id)}
                />
              </View>
            </View>
          </View>
          {isModalVisible && (
            <ServiceBookingModal
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              onPressMyself={() =>
                navigation.navigate('ServiceBookingMyselfScreen', {
                  id: route.params.id,
                  image: route.params.image,
                  title: route.params.title,
                  price: route.params.price,
                })
              }
              onPressOthers={() =>
                navigation.navigate('ServiceBookingOthersScreen', {
                  id: route.params.id,
                  image: route.params.image,
                  title: route.params.title,
                  price: route.params.price,
                })
              }
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ACServices;

const styles = StyleSheet.create({
  container: {padding: '3%'},

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 25,
  },
  imageContainer: {
    backgroundColor: '#F1F1F7',
    height: 100,
    width: 100,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 75,
    width: 90,
    objectFit: 'contain',
  },
  content: {
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
    paddingVertical: 10,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
  },
  btnContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  button1: {
    justifyContent: 'center',
    backgroundColor: '#E1E1FF',
    borderRadius: 15,
    height: 50,
    width: '47%',
  },
  btnText1: {color: '#1E2839', fontSize: 18, fontFamily: 'Outfit-Medium'},
  btnText2: {color: '#6563FF', fontSize: 18, fontFamily: 'Outfit-Medium'},
  button2: {
    justifyContent: 'center',
    backgroundColor: '#E1E1EA',
    borderRadius: 15,
    height: 50,
    width: '47%',
  },
  checkImage: {width: 20, height: 15, objectFit: 'contain'},
  listContent: {paddingHorizontal: 15, paddingVertical: 10},
  aboutText: {
    fontSize: 15,
    fontFamily: 'Outfit-SemiBold',
    color: '#6060EF',
    marginVertical: 5,
  },
  listItem: {
    fontSize: 15,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
    marginVertical: 2,
  },
  readMore: {fontSize: 14, fontFamily: 'Outfit-Medium', color: '#079F04'},
  borderImage: {
    height: 2,
    width: 334,
    left: 17,
  },
  relatedText: {
    fontSize: 12,
    fontFamily: 'Outfit-SemiBold',
    color: '#000000',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  listItemContainer: {
    width: 150,

    height: 150,
    backgroundColor: '#F1F1F7',
    borderRadius: 16,

    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    // paddingHorizontal: 15,
    paddingVertical: 10,
  },
  itemTitle: {
    fontSize: 12,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
  },
  image1: {
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  price1: {
    fontSize: 11,
    fontFamily: 'Outfit-Medium',
    color: '#000000',
  },
});
