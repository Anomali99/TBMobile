import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {logoApp} from '../../assets/image';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={logoApp} style={styles.iconApp} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010101',
    color: '#010101',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconApp: {width: 250, height: 250},
});
