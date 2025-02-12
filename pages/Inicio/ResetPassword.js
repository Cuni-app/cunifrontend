import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Inicio/ResetPassword.styles';

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
        source={require('../../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style = {styles.user_container}>
                <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} showsVerticalScrollIndicator = {false}>
        

      <Text style={styles.title}>Cambio de contraseña</Text>

      <Text style={styles.regular_text}>Nueva Contraseña</Text>
      <TextInput
        placeholder="Nueva contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.regular_text}>Confirmar Nueva Contraseña</Text>
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
      </ScrollView>
      </View>
    </View>
  );
};

export default ResetPassword;
