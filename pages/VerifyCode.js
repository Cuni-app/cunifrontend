import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/VerifyCode.styles';

const VerifyCode = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code === '1567') {
      alert('Código correcto');
      navigation.navigate('ResetPassword');
    } else {
      alert('Código incorrecto');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style={styles.user_container}>
      <Text style={styles.title}>Solicitud cambio de contraseña</Text>
      <Text style={styles.subtitle}>Se envió un código a tu correo registrado</Text>

      <TextInput
        placeholder="Ingrese el código"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Enviar Código</Text>
      </TouchableOpacity>

      <Text style={styles.resend}>Volver a enviar código 00:40</Text>
    </View>
    </View>
  );
};

export default VerifyCode;
