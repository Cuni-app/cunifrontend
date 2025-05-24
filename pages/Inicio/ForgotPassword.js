import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Inicio/ForgotPassword.styles';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    alert('Código enviado a ' + email);
    navigation.navigate('VerifyCode');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style={styles.user_container}>

        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} showsVerticalScrollIndicator = {false}>      
      <Text style={styles.title}>Solicitud cambio de contraseña</Text>
      <Text style={styles.regular_text}> Correo o Usuario </Text>
      <TextInput
        placeholder="Correo o Usuariooooooo"
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
      </ScrollView>
      </View>
    </View>
  );
};

export default ForgotPassword;
