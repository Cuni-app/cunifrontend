import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Login.styles'; // Importamos los estilos

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style = {styles.user_container}>

      {/* Input de Email */}
      <TextInput
        placeholder="Email o Usuario"
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
      {/* Recordar contraseña */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>¿Olvidaste tu contraseña? Recuperala</Text>
      </TouchableOpacity>

      {/* Botón de ingreso */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      {/* Botón de términos */}
      <Text style={styles.terms}>
        Al ingresar aceptas los{' '}
        <Text style={styles.termsLink}>Términos y condiciones</Text>
      </Text>

      {/* Opciones de inicio de sesión social }
      <Text style={styles.or}>O inicia sesión con:</Text>
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
      {/* Enlace de registro */}
      <Text style={styles.register}>
        ¿No tienes una cuenta?{' '}
        <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('Register')}
        >
            Regístrate
        </Text>
        </Text>
            </View>
    </View>
  );
};

export default Login;
