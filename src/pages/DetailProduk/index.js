import React, {useState, useEffect} from 'react';
import {logoApp} from '../../assets/image';
import {keranjangON} from '../../assets/icon';
import {getDetailBuku} from '../../api';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';

const DetailProduk = ({route, navigation}) => {
  const {id} = route.params;
  const [judul, setJudul] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [cover, setCover] = useState();
  const [kategori, setKategori] = useState('');
  const [reting, setReting] = useState([]);

  useEffect(() => {
    getDetailBuku(id, data => {
      setJudul(data.judul);
      setSinopsis(data.sinopsis);
      setHarga(data.harga);
      setStok(data.stok);
      setCover(data.cover);
      setKategori(data.kategori.join(', '));
      setReting(data.reting);
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
        <Text style={styles.judul}>{judul}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: cover}} style={styles.productImg} />
          <View style={{flex: 1, paddingTop: 10, paddingLeft: 10}}>
            <Text style={styles.label}>Kategori :</Text>
            <Text style={styles.text}>{kategori}</Text>
            <Text style={styles.label}>Harga :</Text>
            <Text style={styles.text}>IDR {harga}</Text>
            <Text style={styles.label}>Stok : {stok}</Text>
            <Pressable onPress={() => {}} style={styles.btn}>
              <Text style={styles.btnText}>Edit Produk</Text>
            </Pressable>
            <Pressable onPress={() => {}} style={styles.btn}>
              <Text style={styles.btnText}>Hapus Produk</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.label}>Sinopsis :</Text>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={true}
          style={styles.scrollSinopsis}>
          <Text style={styles.sinopsis}>{sinopsis}</Text>
        </ScrollView>
        <Text style={styles.label}>Komentar :</Text>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={true}
          style={styles.scrollKomen}>
          {Array.isArray(reting) &&
            reting.map(item => (
              <View key={item.id} style={styles.viewKomen}>
                <View style={styles.rowKomen}>
                  <Text style={styles.komentar}>nilai: {item.nilai}/10</Text>
                  <Text style={styles.komentar}>{item.tanggal}</Text>
                </View>
                <Text style={{color: '#000'}}>{item.komentar}</Text>
                <Text style={styles.komentar}>ID User : {item.id_users}</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({
  container: {backgroundColor: '#010101', flex: 1},
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
    paddingHorizontal: 30,
    paddingBottom: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  productImg: {
    width: 150,
    height: 200,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: '#666',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  judul: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
  },
  label: {
    color: '#000',
    width: '100%',
    fontWeight: 'bold',
    marginTop: 5,
  },
  text: {
    color: '#000',
    width: '100%',
    marginLeft: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#B6895B',
    padding: 5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
  btnText: {color: '#FFF', fontWeight: 'bold', fontSize: 10},
  scrollSinopsis: {
    maxHeight: 150,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderColor: '#666',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  sinopsis: {color: '#000', marginBottom: 10},
  scrollKomen: {
    marginTop: 10,
    borderColor: '#666',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  viewKomen: {
    borderColor: '#666',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 5,
  },
  rowKomen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  komentar: {fontWeight: 'bold', color: '#000'},
});
