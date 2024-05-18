import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
type listITemProps = {
  id: number;
  name: string;
  amount: number | string;
  created_at: string;
  channel: string | null;
  payment_status: string;
  purpose: string;
};

const Item = (props: listITemProps) => {
  const {name, amount, created_at, channel, payment_status, purpose} = props;

  const getPaymentStatusColor = (status: string) => {
    return status.toLowerCase() === 'failed' ? '#FF0000' : '#079F04';
  };
  return (
    <View style={styles.listItem}>
      <View style={styles.listBody}>
        <View style={styles.imageSection}>
          <View style={styles.imageBorder}>
            <Image
              source={require('../assests/Images/shopping_cart.png')}
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.headerSection}>
          <Text style={styles.channelText}>{channel}</Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={styles.boldText}>Requested By :</Text>
            <Text>{name}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={styles.boldText}>Purpose :</Text>
            <Text>{purpose}</Text>
          </View>
        </View>
        <View style={styles.amountSection}>
          {/* <FontAwesome name="rupee" size={16} color={'#079F04'} /> */}
          <Text
            style={[
              styles.amountText,
              {color: getPaymentStatusColor(payment_status)},
            ]}>
            {amount}
          </Text>
        </View>
      </View>
      <View style={styles.border} />
      <View style={styles.footer}>
        <Text style={styles.valueText}>{created_at}</Text>
        <Text
          style={[
            styles.paymentStatus,
            {color: getPaymentStatusColor(payment_status)},
          ]}>
          {payment_status}
        </Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  valueText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1E1E1E',
  },
  listItem: {
    flexDirection: 'column',
    padding: '2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginVertical: 10,
    elevation: 3,
  },
  listBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  imageSection: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBorder: {
    backgroundColor: '#B3C5F7',
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
  headerSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '60%',
    gap: 10,
  },
  channelText: {
    color: '#385279',
    fontSize: 14,
    fontWeight: '600',
  },
  amountSection: {
    flexDirection: 'row',

    alignSelf: 'flex-start',
    width: '20%',
  },
  amountText: {
    fontSize: 14,
    fontWeight: '600',
    // color: '#079F04',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    marginHorizontal: 25,
    // marginTop: 10,
  },
  boldText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  paymentStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  border: {
    borderTopColor: '#F2EEEE',
    borderTopWidth: 2,
    marginVertical: 10,
  },
});
