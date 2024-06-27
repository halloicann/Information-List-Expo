import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';

const InformationDetail = ({ route, navigation }) => {
  const { information } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={information.image} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{information.name}</Text>
          <Text style={styles.detail}>
            <Text style={styles.bold}>Universitas : </Text>{information.universitas}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.bold}>Prodi : </Text>{information.prodi}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Kembali"
              onPress={() => navigation.navigate('Information List')}
              color="#2a9df4"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
});

export default InformationDetail;