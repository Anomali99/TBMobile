import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const Detail = ({route, navigation}) => {
  const {id} = route.params;
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF'}}>{id}</Text>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.btnContainer}>
        <Text style={styles.btnText}>Back</Text>
      </Pressable>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: '#FFF',
    padding: 5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {color: '#B6895B', fontWeight: 'bold', fontSize: 10},
});
