import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/ForgotPassword.styles';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    alert('Código enviado a ' + email);
    navigation.navigate('VerifyCode');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style={styles.user_container}>
      <Text style={styles.title}>Solicitud cambio de contraseña</Text>
      <TextInput
        placeholder="Correo o Usuario"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Solicitud de cambio</Text>
      </TouchableOpacity>

      <Text style={styles.login} onPress={() => navigation.navigate('Login')}>
        ¿Ya tienes una cuenta? <Text style={styles.loginLink}>Inicia sesión</Text>
      </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;
