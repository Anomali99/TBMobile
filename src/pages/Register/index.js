import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {logoApp} from '../../assets/image';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setName] = useState('');
  const [telepon, setTelepon] = useState('');

  const handleRegiter = () => {
    fetch('http://192.168.68.219:5127/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        nama: nama,
        telepon: telepon,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.message == 'registrasi berhasil') {
          Alert.alert('Register berhasil', 'silahkan login');
          navigation.replace('Login');
        } else {
          Alert.alert('Register gagal', data.message);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={logoApp} style={styles.logoApp} />
      <View style={styles.itemContainer}>
        <TextInput
          value={nama}
          placeholder="Name"
          onChangeText={text => setName(text)}
          style={styles.textInput}
        />
        <TextInput
          value={username}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          style={styles.textInput}
        />
        <TextInput
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.textInput}
        />
        <TextInput
          value={telepon}
          placeholder="Telephone"
          onChangeText={text => setTelepon(text)}
          style={styles.textInput}
        />
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText} onPress={handleRegiter}>
            Registrasi
          </Text>
        </Pressable>
      </View>
      <Text style={styles.text}>
        ----------------------------------Atau----------------------------------
      </Text>
      <Pressable
        onPress={() => navigation.replace('Login')}
        style={styles.btnContainer}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoApp: {
    marginTop: -150,
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
    padding: 10,
  },
  textInput: {
    color: '#FFF',
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  btnText: {color: '#B6895B', fontWeight: 'bold', fontSize: 10},
  text: {color: '#AAA', marginVertical: 20},
});
