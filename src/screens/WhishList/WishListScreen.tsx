import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../../types';
import CarsContainer from './CarsContainer';
import ServiceContainer from './ServiceContainer';
import CustomButton from '../../components/ButtonComponent';
import Header from '../../components/Header';

type WishListScreenTypes = NativeStackScreenProps<
  stackScreens,
  'WishListScreen'
>;

const WishListScreen = (props: WishListScreenTypes) => {
  const {navigation} = props;
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const renderContent = () => {
    if (selectedTab === 'Cars') {
      return <CarsContainer />;
    } else if (selectedTab === 'Services') {
      return <ServiceContainer />;
    } else {
      return (
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../assests/Images/WishListImages/no-order.png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Looks like you haven’t </Text>
            <Text style={styles.text}>added anything</Text>
          </View>
          <CustomButton
            title="Explore Products"
            buttonStyle={[
              styles.button,
              {
                elevation: 5,
                marginVertical: '15%',
                alignSelf: 'center',
              },
            ]}
            textStyle={styles.text}
            onPress={() => navigation.navigate('ServicesScreen')}
          />
        </View>
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="#fff"
        // translucent={true}
        barStyle="dark-content"
        hidden={false}
      />
      <SafeAreaView>
        <ScrollView nestedScrollEnabled={true} stickyHeaderIndices={[0]}>
          <Header
            onPress={() => navigation.navigate('PaymentsScreen')}
            title="Fuel Your Dream Car"
          />

          <View style={styles.container}>
            <View style={styles.btnContainer}>
              <CustomButton
                title="Cars"
                buttonStyle={[
                  styles.button,
                  {
                    height: 50,
                    backgroundColor:
                      selectedTab === 'Cars' ? '#6060EF' : '#E4E4E3',
                  },
                ]}
                onPress={() => {
                  setSelectedTab('Cars');
                }}
                textStyle={[
                  styles.text,
                  {
                    fontFamily: 'Outfit-SemiBold',
                    color: selectedTab === 'Cars' ? '#FFFFFF' : '#000000',
                  },
                ]}
              />
              <View style={{marginHorizontal: 5}}></View>
              <CustomButton
                title="Services"
                buttonStyle={[
                  styles.button,
                  {
                    height: 50,
                    backgroundColor:
                      selectedTab === 'Services' ? '#6060EF' : '#E4E4E3',
                  },
                ]}
                textStyle={[
                  styles.text,
                  {
                    fontFamily: 'Outfit-SemiBold',
                    color: selectedTab === 'Services' ? '#FFFFFF' : '#000000',
                  },
                ]}
                onPress={() => {
                  setSelectedTab('Services');
                }}
              />
            </View>
            {renderContent()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 90,
    alignItems: 'center',

    padding: '5%',
  },
  btnContainer: {
    flex: 1,
    paddingVertical: 25,
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#E4E4E3',
    borderRadius: 12,
    height: 45,
    flex: 1,
    paddingHorizontal: '5%',
  },

  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    height: '12%',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Outfit-Medium',
  },
  textContent: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Outfit-Regular',
  },
});
