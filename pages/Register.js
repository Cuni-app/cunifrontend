import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Register.styles';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style = {styles.user_container}>
      {/* Input de Usuario */}
      <TextInput
        placeholder="Nuevo Usuario"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        />

      {/* Input de Email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        />

      {/* Input de Contraseña */}
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        />

      {/* Confirmar Contraseña */}
      <TextInput
        placeholder="Confirmar contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
      />

      {/* Botón de términos */}
      <Text style={styles.terms}>
        Aceptar{' '}
        <Text style={styles.termsLink}>términos y condiciones</Text>
      </Text>

      {/* Botón de registro */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      {/* Opciones de registro social }
      <Text style={styles.or}>O regístrate con:</Text>
      <View style={styles.socialContainer}>
      <TouchableOpacity>
      <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' }}
      style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
          style={styles.socialIcon}
          />
          </TouchableOpacity>
      </View>
      
      {/* Enlace de inicio de sesión */}
      <Text style={styles.login}>
        ¿Ya posees una cuenta?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          Inicia sesión
        </Text>
      </Text>
          </View>
    </View>
  );
};

export default Register;
