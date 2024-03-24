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

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', `Username: ${username}, Password: ${password}`);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      <Image source={logoApp} style={styles.logoApp} />
      <View style={styles.itemContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <Pressable onPress={handleLogin} style={styles.btnContainer}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>
      <Text style={styles.text}>
        ----------------------------------Atau----------------------------------
      </Text>
      <Pressable
        onPress={() => navigation.replace('Register')}
        style={styles.btnContainer}>
        <Text style={styles.btnText}>Registrasi</Text>
      </Pressable>
    </View>
  );
};

export default Login;

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
    maxHeight: 200,
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
