import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation(); // Obtiene el objeto navigation

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Simulacro')}>
        <Image source={require('../../assets/Footer/inicio.png')} style={styles.icon} />
        <Text style={styles.text}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Parcial')}>
        <Image source={require('../../assets/Footer/cuy.png')} style={styles.icon} />
        <Text style={styles.text}>Cuni</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Parcial')}>
        <Image source={require('../../assets/Footer/ranking.png')} style={styles.icon} />
        <Text style={styles.text}>Ranking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Parcial')}>
        <Image source={require('../../assets/Footer/reporte.png')} style={styles.icon} />
        <Text style={styles.text}>Reporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
        <Image source={require('../../assets/Footer/perfil.png')} style={styles.icon} />
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#352a54',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Footer;
