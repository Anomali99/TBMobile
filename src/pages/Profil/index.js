import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deleteUsers, selectUsers} from '../../database';
import {profilON} from '../../assets/icon';

const Profil = ({navigation}) => {
  const [IdUser, setIdUser] = useState('');
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [level, setLevel] = useState('');
  const [telepon, setTelepon] = useState('');
  const [tanggal, setTanggal] = useState('');

  useEffect(() => {
    selectUsers(users => {
      if (users.length > 0) {
        const user = users[0];
        setIdUser(user.id);
        setNama(user.nama);
        setUsername(user.username);
        setLevel(user.level);
        setTelepon(user.telepon);
        setTanggal(user.tanggal);
      }
    });
  });

  const handleLogout = () => {
    deleteUsers();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={profilON} style={styles.logoApp} />
      <View style={styles.itemContainer}>
        <Text style={styles.text}>ID : {IdUser}</Text>
        <Text style={styles.text}>Nama : {nama}</Text>
        <Text style={styles.text}>Username : {username}</Text>
        <Text style={styles.text}>Level : {level}</Text>
        <Text style={styles.text}>Telepon : {telepon}</Text>
        <Text style={styles.text}>Tanggal : {tanggal}</Text>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Perbarui</Text>
        </Pressable>
      </View>

      <Pressable onPress={handleLogout} style={styles.btnContainerR}>
        <Text style={styles.btnTextR}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoApp: {
    marginTop: -50,
    width: 150,
    height: 150,
  },
  itemContainer: {
    width: '100%',
    maxHeight: 400,
    borderRadius: 10,
    backgroundColor: '#B6895B',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: '#FFF',
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 3,
    marginBottom: 10,
    fontSize: 20,
    padding: 10,
    placeholderTextColor: '#AAA',
  },
  btnContainer: {
    backgroundColor: '#FFF',
    padding: 5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnContainerR: {
    backgroundColor: '#F00',
    padding: 5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {color: '#B6895B', fontWeight: 'bold', fontSize: 10},
  btnTextR: {color: '#FFF', fontWeight: 'bold', fontSize: 10},
});
