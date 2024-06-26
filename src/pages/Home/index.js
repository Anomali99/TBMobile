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

const Home = ({navigation}) => {
  const [buku, setBuku] = useState([]);
  const [searchKey, setKey] = useState('');
  const [level, setLevel] = useState('');

  const searchBooks = () => {
    var key = searchKey.trim();
    var url = '';
    if (key == '') {
      getAllBuku(data => {
        if (data != 'message') {
          setBuku(data);
        } else {
          setBuku(null);
        }
      });
    } else {
      getBuku(key, data => {
        if (data != 'message') {
          setBuku(data);
        } else {
          setBuku(null);
        }
      });
    }
  };

  useEffect(() => {
    selectUsers(users => {
      setLevel(users[0].level);
    });

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
          <Image source={logoApp} style={styles.iconBar} />
          <Image source={keranjangON} style={styles.iconBar} />
        </View>
        <View></View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.searchBar}>
          <TextInput
            value={searchKey}
            onChangeText={text => setKey(text)}
            placeholder="Cari Buku .."
            placeholderTextColor="#AAA"
            style={{color: '#000000', width: 200}}
          />
          <Pressable onPress={searchBooks}>
            <Image source={cari} style={{marginRight: 10}} />
          </Pressable>
        </View>
        {level === 'pegawai' ? (
          <View style={styles.menuContainer}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.menuItem}>
                <Image source={usersOFF} />
              </View>
              <Text style={{color: '#000000'}}>Users</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.menuItem}>
                <Image source={transaksiOFF} />
              </View>
              <Text style={{color: '#000000'}}>Transaksi</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.menuItem}>
                <Pressable onPress={() => navigation.navigate('Produk')}>
                  <Image source={bukuOFF} />
                </Pressable>
              </View>
              <Text style={{color: '#000000'}}>Buku</Text>
            </View>
          </View>
        ) : null}
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
                        navigation.navigate('Detail', {id: item.id})
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

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: '#010101', flex: 1},
  scrollContainer: {paddingHorizontal: 30, paddingBottom: 50, marginTop: 20},
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
    marginTop: 20,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: -30,
    elevation: 20,
    shadowColor: '#000000',
    padding: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 40,
  },
  menuItem: {
    backgroundColor: '#B6895B',
    padding: 15,
    borderRadius: 10,
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
