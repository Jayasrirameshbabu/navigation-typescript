import AsyncStorage from '@react-native-community/async-storage';

export const setData = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    console.log('error while storing data', e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error while getting data', e);
  }
};
