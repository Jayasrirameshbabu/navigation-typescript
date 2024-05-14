import {
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../Navigation/Stack/AllScreens';

type propsType = NativeStackScreenProps<stackScreens, 'FetchData'>;
type dataType = {
  useId: number;
  id: number;
  title: string;
  body: string;
};
const FetchData = (props: propsType) => {
  const {navigation} = props;

  const [data, setData] = useState<dataType[]>([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(alldata => setData(alldata))
      .catch(error => ToastAndroid.show(error, ToastAndroid.SHORT));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Card', {title: item.title})}>
            <View style={styles.card}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default FetchData;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'lightgrey',
    margin: 2,
    borderRadius: 5,
    padding: 10,
  },
});
