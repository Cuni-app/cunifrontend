import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';
import completoImg from '../../assets/Simulacro/Main/Completo.png';
import Pregunta from './Pregunta';

const Parcial = ({ navigation }) => {
  return (
    <View style={styles.container}> {}
      <Header />
      <ScrollView contentContainerStyle={{ minWidth: '100%', alignItems: 'center',alignContent: 'center'}} showsVerticalScrollIndicator = {false}>    
        <View style={styles.card}>
          <Image source={completoImg} style={styles.image} />
          <Text style={styles.title}>Completo</Text>
          <Text style={styles.description}>
            Este simulacro consta de 80 preguntas variadas de las secciones:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Letras</Text>
            <Text style={styles.listItem}>• Matemáticas</Text>
            <Text style={styles.listItem}>• Razonamiento</Text>
            <Text style={styles.listItem}>• Ciencias</Text>
            <Text style={styles.listItem}>• Cultura General</Text>
          </View>
          <Text style={styles.duration}>Duración: 180 Minutos</Text>
          <Text style={styles.reward}>
            Monedas por pregunta correcta: 10
          </Text>
          <Text style={styles.reward}>
            Exp por pregunta correcta: 5
          </Text>
          <TouchableOpacity 
            style={styles.startButton} 
            onPress={() => navigation.navigate('Pregunta')}

          >
            <Text style={styles.buttonText}>Empezar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#917DBC', 
  },
  card: {
    backgroundColor: '#F0E9C0', 
    borderRadius: 15,
    padding: 20,
    width: 300, 
    alignSelf: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, 
    marginVertical: 20, 
    marginBottom: '25%'
  },
  image: {
    width: 100,
    height: 100, 
    resizeMode: 'contain', 
    alignSelf: 'center', 
    marginBottom: 10, 
  },
  title: {
    color: '#2C2155', 
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#333',
    fontSize: 16,
    marginBottom: 10,
  },
  list: {
    marginVertical: 10,
  },
  listItem: {
    color: '#333',
    fontSize: 16,
    marginVertical: 5,
  },
  duration: {
    color: '#333',
    fontSize: 16,
    marginVertical: 5,
  },
  reward: {
    color: '#333',
    fontSize: 16,
    marginVertical: 5,
  },
  startButton: {
    backgroundColor: '#2C2155', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Parcial;