import {StyleSheet, Text, View, Modal, Pressable, Image} from 'react-native';
import React from 'react';
import CustomButton from './ButtonComponent';

const ServiceBookingModal = ({
  isModalVisible,
  setIsModalVisible,
  onPressMyself,
  onPressOthers,
}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(false);
      }}>
      <Pressable
        onPress={() => setIsModalVisible(false)}
        style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image
            style={styles.closeImage}
            source={require('../../assests/Images/ServiceScreenImages/Rectangle-2109.png')}
          />

          <View style={styles.headContainer}>
            <Text style={styles.modalHeader}>WHO ARE YOU MAKING THIS</Text>
            <Text style={styles.modalHeader}>BOOKING FOR ?</Text>
          </View>
          <View>
            <Image
              style={styles.modalImage}
              source={require('../../assests/Images/ServiceScreenImages/Group-743.png')}
            />
          </View>
          <View style={[styles.btnContainer, {marginVertical: 20}]}>
            <CustomButton
              title="Myself"
              buttonStyle={[styles.button1, {backgroundColor: '#6060EF'}]}
              textStyle={[styles.btnText1, {color: '#F2F2F2'}]}
              onPress={onPressMyself}
            />
            <View style={{marginHorizontal: 10}} />
            <CustomButton
              title="Others"
              buttonStyle={[styles.button1]}
              textStyle={[styles.btnText1]}
              onPress={onPressOthers}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ServiceBookingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    height: '47%',
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeImage: {
    height: 3,
    width: 70,
    color: '#D9D9D9',
  },
  headContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    objectFit: 'contain',
  },
  modalHeader: {
    fontSize: 16,
    fontFamily: 'Outfit-SemiBold',
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
});
