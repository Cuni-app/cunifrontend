import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/Inicio/PantallaInicio.styles'; 

const PantallaInicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../assets/Logos/CUNI 1.png')}
        style={styles.mascot}
      />

      <Text style={styles.description}>
        ¡Prepararte nunca fue tan fácil!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Ya tengo una cuenta,{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Ingresar</Text>
      </Text>
    </View>
  );
};

export default PantallaInicio;
