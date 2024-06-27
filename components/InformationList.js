import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InformationList = ({ navigation }) => {
  const informations = [
    { 
      id: '1', 
      name: 'Alya Nurjannah', 
      universitas: 'Universitas Muhammadiyah Sukabumi', 
      prodi: 'Sastra Inggris',  
      image: require('../assets/alya.png')
    },
    { 
      id: '2', 
      name: 'Candra Kusuma Hidayat', 
      universitas: 'Universitas Muhammadiyah Sukabumi', 
      prodi: 'Teknik Informatika',  
      image: require('../assets/candra1.jpeg')
    },
    { 
      id: '3', 
      name: 'Rezi Farela', 
      universitas: 'Universitas Pasundan', 
      prodi: 'Teknik Geologi',  
      image: require('../assets/rezi.png')
    },
    { 
      id: '4', 
      name: 'Filsa Faturahman', 
      universitas: 'Universitas Terbuka', 
      prodi: 'Hukum',  
      image: require('../assets/filsa.png')
    },
    { 
      id: '5', 
      name: 'Rafi Azzauzi hairun', 
      universitas: 'Telkom Universitas', 
      prodi: 'Teknik Informatika',  
      image: require('../assets/rafi.png')
    },
    { 
      id: '6', 
      name: 'Hamdi Yaksaha', 
      universitas: 'Universitas Pajajaran', 
      prodi: 'DKV',  
      image: require('../assets/hamdi.png')
    },
    { 
      id: '7', 
      name: 'Maura Auliansyah', 
      universitas: 'Universitas NusaPutra', 
      prodi: 'Hukum',  
      image: require('../assets/Maura.png')
    },
    { 
      id: '8', 
      name: 'Dhara Annita', 
      universitas: 'Universitas Linggabuana', 
      prodi: 'Pendidikan Ekonomi',  
      image: require('../assets/Dhara.png')
    },
    { 
      id: '9', 
      name: 'Irfan Haripurwanto', 
      universitas: 'Universitas Linggabuana', 
      prodi: 'Pendidikan',  
      image: require('../assets/irfan.png')
    },
  ];

  const renderInformationItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { information: item })}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', { information: item })}>
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={informations}
      renderItem={renderInformationItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#2a9df4',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
    alignSelf: 'flex-end', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default InformationList;