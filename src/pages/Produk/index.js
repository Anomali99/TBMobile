import React, {useState, useEffect} from 'react';
import {logoApp} from '../../assets/image';
import {selectUsers} from '../../database';
import {getBuku, getAllBuku} from '../../api';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {
  bukuOFF,
  cari,
  keranjangON,
  transaksiOFF,
  usersOFF,
} from '../../assets/icon';

const Produk = ({navigation}) => {
  const [buku, setBuku] = useState([]);

  useEffect(() => {
    getAllBuku(data => {
      if (data != 'message') {
        setBuku(data);
      } else {
        setBuku(null);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.barContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={logoApp} style={styles.iconBar} />
          </Pressable>
          <Image source={keranjangON} style={styles.iconBar} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View
          style={{
            paddingHorizontal: 50,
            marginVertical: 20,
          }}>
          <View
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#B6895B',
              borderColor: '#666',
              borderWidth: 2,
              borderStyle: 'solid',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FFF',
              }}>
              Tambah Produk
            </Text>
          </View>
        </View>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <View style={styles.scrollView}>
            {Array.isArray(buku) &&
              buku.map(item => (
                <View key={item.id} style={styles.productContainer}>
                  <View style={styles.productItem}>
                    <Pressable
                      style={{flex: 1, alignItems: 'center'}}
                      onPress={() =>
                        navigation.navigate('DetailProduk', {id: item.id})
                      }>
                      <Image
                        source={{uri: item.cover}}
                        style={styles.productImg}
                      />
                      <Text style={styles.productTitle}>{item.judul}</Text>
                    </Pressable>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Produk;

const styles = StyleSheet.create({
  container: {backgroundColor: '#010101', flex: 1},
  scrollContainer: {paddingHorizontal: 30, paddingBottom: 50},
  iconBar: {height: 40, width: 40},
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 10,
    marginBottom: 40,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  productContainer: {
    width: '50%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  productItem: {
    flex: 1,
    width: '100%',
    height: 250,
    backgroundColor: '#B6895B',
    borderColor: '#666',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  productImg: {
    width: '100%',
    height: '75%',
    borderRadius: 15,
    marginVertical: 10,
    borderColor: '#666',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  productTitle: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
});
