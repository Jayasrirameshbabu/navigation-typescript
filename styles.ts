import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  Boxcontainer: {
    width: 350,
    height: 230,
    // height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    top: -100,
    elevation: 6,
    padding: 20,
    gap: 20,
    zIndex: 10,
    left: 30,
  },
  header: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Outfit-SemiBold',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Outfit-Regular',
  },
  inputBox: {
    width: 285,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingLeft: 15,
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Outfit-Medium',
  },
  otpInputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  otpInputText: {
    flex: 1,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
    height: 60,
    width: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // top: 1,
  },
  buttonInner: {
    borderRadius: 22,
    height: 44,
    width: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D6DF0',
  },
  arrowButton: {height: 24, width: 24},
  inputImageStyle: {
    margin: 5,
    height: 14,
    width: 14,
    alignItems: 'center',
  },
  inputSectionStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D9D9D9',

    borderRadius: 16,

    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  passwordInputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    top: -20,
  },

  listItem: {
    flex: 1,
    padding: '2%',
    borderRadius: 20,
    marginVertical: 5,

    width: '100%',
  },
  listItemStyles: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E9E9E9',
    borderWidth: 1,
  },
  listBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Outfit-Regular',
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 10,
    paddingVertical: 10,
  },
  listHeader: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: '#1E1E1E',
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Outfit-ExtraBold',
    color: '#000000',
  },
  headerImageStyle: {width: '100%', height: 120, objectFit: 'fill'},
});

export default commonStyles;
