import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Ícono Estrella */}
      <View style={styles.item}>
        <Image 
          source={require('../../assets/Header/star.png')} 
          style={[styles.icon, { tintColor: '' }]} 
        />
        <Text style={[styles.value, { color: '#00D0FF' }]}>12k</Text>
      </View>

      {/* Ícono Llama */}
      <View style={styles.item}>
        <Image 
          source={require('../../assets/Header/flame.png')} 
          style={[styles.icon, { tintColor: '' }]} 
        />
        <Text style={[styles.value, { color: '#FF7EB2' }]}>120</Text>
      </View>

      {/* Ícono Moneda */}
      <View style={styles.item}>
        <Image 
          source={require('../../assets/Header/coin.png')} 
          style={[styles.icon, { tintColor: '' }]} 
        />
        <Text style={[styles.value, { color: '#FFB800' }]}>12k</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2C2155', 
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    width: '100%',
    height: 100, 
    zIndex: 1, 
  },
  item: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  value: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
