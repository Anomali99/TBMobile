import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {logoApp} from '../../assets/image';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={logoApp} style={styles.logoApp} />
      <View style={styles.itemContainer}>
        <TextInput placeholder="Name" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TextInput placeholder="Telephone" style={styles.textInput} />
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Registrasi</Text>
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
