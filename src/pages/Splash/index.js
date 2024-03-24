import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {logoApp} from '../../assets/image';
import {isAfter, isBefore, addDays, parse} from 'date-fns';
import {selectUsers, deleteUsers} from '../../database';

const Splash = ({navigation}) => {
  useEffect(() => {
    selectUsers(users => {
      if (users.length > 0) {
        const userDate = parse(users[0].tanggal, 'dd-MM-yyyy', new Date());
        const threeDaysAfterUserDate = addDays(userDate, 3);
        const currentDate = new Date();
        if (
          isAfter(currentDate, userDate) &&
          isBefore(currentDate, threeDaysAfterUserDate)
        ) {
          setTimeout(() => {
            navigation.replace('MainApp');
          }, 2000);
        } else {
          deleteUsers();
          setTimeout(() => {
            navigation.replace('Login');
          }, 2000);
        }
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 2000);
      }
    });
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
