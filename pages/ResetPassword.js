import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/ResetPassword.styles';

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Contraseña cambiada con éxito');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style = {styles.user_container}>

      <Text style={styles.title}>Cambio de contraseña</Text>
      <TextInput
        placeholder="Nueva contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirmar Nueva contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
