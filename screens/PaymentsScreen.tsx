import {FlatList, Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../types';
import Item from './Item';

type PaymentsScreenTypes = NativeStackScreenProps<
  stackScreens,
  'PaymentsScreen'
>;
export function getCommaPrice(number: any) {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });
  const formattedNumber = formatter.format(number);
  return formattedNumber;
}

const PaymentsScreen = (props: PaymentsScreenTypes) => {
  const {navigation} = props;

  const data = [
    {
      id: 104,
      register_no_or_cust_id: 'TEATINH',
      phone: '7538908426',
      name: 'Karthik krr ',
      payment_status: 'Expired',
      payment_gateway: 'Paytm',
      gateway_order_id: null,
      gateway_charges: 0.0,
      gateway_session_id: null,
      gateway_message: null,
      item: null,
      loyalti_transaction_type: null,
      gross_amount: 1.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 100000,
      purpose: 'Car dhdjಉಆಋ',
      crmId: 'dffdfdfffdf',
      transaction_number: null,
      billNumberOrInvoiceNumber: 'HJJJJ',
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'laxman DH',
      requested_employee_mobile: '8197735916',
      requested_employee_location: null,
      region: null,
      channel: 'Vehicle Service',
      created_at: '2024-03-19T11:52:31.608067Z',
      modified_at: '2024-03-19T11:52:31.608067Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
    {
      id: 103,
      register_no_or_cust_id: 'TESTINCCAS',
      phone: '7538908426',
      name: 'Shiva shankar kar ',
      payment_status: 'Expired',
      payment_gateway: 'Paytm',
      gateway_order_id: null,
      gateway_charges: 0.0,
      gateway_session_id: null,
      gateway_message: null,
      item: null,
      loyalti_transaction_type: null,
      gross_amount: 1.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 100000,
      purpose: 'Car service',
      crmId: 'dffdfdfffdf',
      transaction_number: null,
      billNumberOrInvoiceNumber: 'KA21TT6788',
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'laxman DH',
      requested_employee_mobile: '8197735916',
      requested_employee_location: null,
      region: null,
      channel: 'Vehicle Service',
      created_at: '2024-03-19T11:49:07.249226Z',
      modified_at: '2024-03-19T11:49:07.249226Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
    {
      id: 102,
      register_no_or_cust_id: 'KA21YY7889',
      phone: '7538908426',
      name: 'Shiva shankar N  l',
      payment_status: 'Expired',
      payment_gateway: 'Paytm',
      gateway_order_id: null,
      gateway_charges: 0.0,
      gateway_session_id: null,
      gateway_message: null,
      item: null,
      loyalti_transaction_type: null,
      gross_amount: 1.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 100000,
      purpose: 'Car service',
      crmId: 'dffdfdfffdf',
      transaction_number: null,
      billNumberOrInvoiceNumber: 'KA21UII',
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'laxman DH',
      requested_employee_mobile: '8197735916',
      requested_employee_location: null,
      region: null,
      channel: 'Vehicle Service',
      created_at: '2024-03-19T11:30:21.815660Z',
      modified_at: '2024-03-19T11:30:21.815660Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
    {
      id: 101,
      register_no_or_cust_id: 'TESTING',
      phone: '7538908426',
      name: 'Shiva kar k ',
      payment_status: 'Expired',
      payment_gateway: 'Paytm',
      gateway_order_id: null,
      gateway_charges: 0.0,
      gateway_session_id: null,
      gateway_message: null,
      item: null,
      loyalti_transaction_type: null,
      gross_amount: 1.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 5000,
      purpose: 'Test',
      crmId: 'dffdfdfffdf',
      transaction_number: null,
      billNumberOrInvoiceNumber: 'TESTING',
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'laxman DH',
      requested_employee_mobile: '8197735916',
      requested_employee_location: null,
      region: null,
      channel: 'Vehicle Service',
      created_at: '2024-03-19T11:27:48.700433Z',
      modified_at: '2024-03-19T11:27:48.700433Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
    {
      id: 100,
      register_no_or_cust_id: 'KA21TR8899',
      phone: '7538908426',
      name: 'Shivashankar Kar',
      payment_status: 'Expired',
      payment_gateway: 'Paytm',
      gateway_order_id: null,
      gateway_charges: 0.0,
      gateway_session_id: null,
      gateway_message: null,
      item: null,
      loyalti_transaction_type: null,
      gross_amount: 1.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 2500,
      purpose: 'Tessting',
      crmId: 'dffdfdfffdf',
      transaction_number: null,
      billNumberOrInvoiceNumber: 'TESTING',
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'laxman DH',
      requested_employee_mobile: '8197735916',
      requested_employee_location: null,
      region: null,
      channel: 'Vehicle Service',
      created_at: '2024-03-19T11:24:36.627992Z',
      modified_at: '2024-03-19T11:24:36.627992Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
    {
      id: 99,
      register_no_or_cust_id: 'KA16CL1999',
      phone: '7538908426',
      name: 'shiva',
      payment_status: 'Expired',
      payment_gateway: 'Paytm',
      gateway_order_id: null,
      gateway_charges: null,
      gateway_session_id: null,
      gateway_message: null,
      item: null,
      loyalti_transaction_type: null,
      gross_amount: 5.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 50000,
      purpose: 'New cars',
      crmId: null,
      transaction_number: null,
      billNumberOrInvoiceNumber: null,
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'Laxman halaki',
      requested_employee_mobile: '8197735916',
      requested_employee_location: 'Mysore Road',
      region: null,
      channel: null,
      created_at: '2024-03-09T11:32:42.980261Z',
      modified_at: '2024-03-09T11:32:42.980261Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
    {
      id: 98,
      register_no_or_cust_id: 'KA16CL1999',
      phone: '7538908426',
      name: 'shiva',
      payment_status: 'Failed',
      payment_gateway: 'Paytm',
      gateway_order_id: 'PTMCLORD-1709984248',
      gateway_charges: null,
      gateway_session_id: '53ccf735-6170-4cab-87f1-639c357bfd61',
      gateway_message: 'User has not completed transaction.',
      item: null,
      loyalti_transaction_type: 'Add',
      gross_amount: 1.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 1.0,
      amount: 10000,
      purpose: 'New cars',
      crmId: null,
      transaction_number: null,
      billNumberOrInvoiceNumber: null,
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'Laxman halaki',
      requested_employee_mobile: '8197735916',
      requested_employee_location: 'Mysore Road',
      region: null,
      channel: null,
      created_at: '2024-03-09T11:32:14.827059Z',
      modified_at: '2024-03-09T11:37:38.303268Z',
      dont_show: false,
      callBackUrl:
        'http://collections.kalyanicrm.com/close.html?source=collection&checksum=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlcl9pZCI6IlBUTUNMT1JELTE3MDk5ODQyNDgiLCJwYXltZW50X2dhdGV3YXkiOiJQYXl0bSJ9.7sJJxSScEesxiFvwtPd1rUS0T_mdhTYieGz4zfzwvhA',
      internal_profile: 35,
    },
    {
      id: 97,
      register_no_or_cust_id: 'KA16CL1999',
      phone: '7538908426',
      name: 'shiva',
      payment_status: 'Failed',
      payment_gateway: 'Paytm',
      gateway_order_id: 'PTMCLORD-1709982769',
      gateway_charges: null,
      gateway_session_id: '5cb55c71-f2c0-4a00-bf5a-45b158419111',
      gateway_message:
        'Your payment has been declined by your bank. Please try again or use a different method to complete the payment.',
      item: null,
      loyalti_transaction_type: 'Add',
      gross_amount: 1.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 1.0,
      amount: 15000,
      purpose: 'New cars',
      crmId: null,
      transaction_number: null,
      billNumberOrInvoiceNumber: null,
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'Laxman halaki',
      requested_employee_mobile: '8197735916',
      requested_employee_location: 'Mysore Road',
      region: null,
      channel: null,
      created_at: '2024-03-09T11:10:06.325443Z',
      modified_at: '2024-03-09T11:14:15.929731Z',
      dont_show: false,
      callBackUrl:
        'http://collections.kalyanicrm.com/close.html?source=collection&checksum=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlcl9pZCI6IlBUTUNMT1JELTE3MDk5ODI3NjkiLCJwYXltZW50X2dhdGV3YXkiOiJQYXl0bSJ9.K4BSFdM9k3cg31ihdBOfEXAsclqR1O04mnzqz9n4heI',
      internal_profile: 35,
    },
    {
      id: 96,
      register_no_or_cust_id: 'KA16CL1999',
      phone: '7538908426',
      name: 'shiva',
      payment_status: 'Success',
      payment_gateway: 'Cashless',
      gateway_order_id: '',
      gateway_charges: null,
      gateway_session_id: '',
      gateway_message: '',
      item: null,
      loyalti_transaction_type: 'Add',
      gross_amount: null,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 3000,
      purpose: 'New cars',
      crmId: null,
      transaction_number: 'cashless_17099825171410218',
      billNumberOrInvoiceNumber: null,
      transactionReferenceNumber: null,
      requested_employee_id: '71832',
      requested_employee_name: 'Laxman halaki',
      requested_employee_mobile: '8197735916',
      requested_employee_location: 'Mysore Road',
      region: null,
      channel: null,
      created_at: '2024-03-09T11:07:10.274728Z',
      modified_at: '2024-03-09T11:08:46.386146Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
    {
      id: 90,
      register_no_or_cust_id: 'KA22GG555',
      phone: '7538908426',
      name: 'Shiva H',
      payment_status: 'Expired',
      payment_gateway: 'Paytm',
      gateway_order_id: null,
      gateway_charges: null,
      gateway_session_id: null,
      gateway_message: null,
      item: null,
      loyalti_transaction_type: null,
      gross_amount: 100.0,
      special_coupon: 0.0,
      e_point: 0.0,
      i_point: 0.0,
      cgst_sgst: 0.0,
      net_paid: 0.0,
      amount: 1000,
      purpose: 'car service',
      crmId: '65e20922d48ee5862',
      transaction_number: null,
      billNumberOrInvoiceNumber: null,
      transactionReferenceNumber: null,
      requested_employee_id: '52729',
      requested_employee_name: 'Admin',
      requested_employee_mobile: null,
      requested_employee_location: null,
      region: null,
      channel: 'ARENA Sales',
      created_at: '2024-03-01T16:59:34.810288Z',
      modified_at: '2024-03-01T16:59:34.810288Z',
      dont_show: false,
      callBackUrl: null,
      internal_profile: 35,
    },
  ];

  const isEmptyData = data.length !== 0;
  return (
    <View style={styles.container}>
      {isEmptyData ? (
        <>
          <View>
            <Text style={styles.text}>Payments</Text>
          </View>
          <View>
            <Image source={require('../assests/Images/Asset-30.png')} />
          </View>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.nameText}>Shreyas Manohar M</Text>
          </View>
          <View style={styles.listContent}>
            <Text style={styles.valueText}>Your Payments</Text>

            <FlatList
              data={data}
              renderItem={({item}) => (
                <Item
                  name={item.name}
                  id={item.id}
                  amount={getCommaPrice(item.amount)}
                  created_at={item.created_at}
                  channel={item.channel}
                  purpose={item.purpose}
                  payment_status={item.payment_status}
                />
              )}
              keyExtractor={item => JSON.stringify(item.id)}
            />
          </View>
        </>
      ) : (
        <View style={styles.nodatacontainer}>
          <View>
            <Image
              style={styles.image}
              source={require('../assests/Images/attachment.png')}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Looks like you haven’t </Text>
            <Text style={styles.text}>made any transactions</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <View style={styles.button}>
              <Text style={styles.text}>Explore Products</Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
    alignItems: 'center',
    gap: 20,
  },
  nodatacontainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  welcomeSection: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    position: 'absolute',
    height: '10%',
    width: '50%',
    top: 110,
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#00006C',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1E1E1E',
  },
  listContent: {
    flex: 1,
    width: '100%',
  },
  valueText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1E1E',
    marginVertical: 10,
  },
  image: {
    height: 180,
    width: 180,
    bottom: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E4E3',
    borderRadius: 12,
    height: 44,
    width: 164,
    bottom: 10,
  },

  textContainer: {
    bottom: 50,
  },
});
