import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Inicio/Login.styles'; // Importamos los estilos
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChangeInput = (field, value) => {
    setUser({
      ...user,
      [field]: value
    });
  };

  const onFormSubmit = () => {
    // Por ejemplo, validar las credenciales y navegar a la pantalla principal
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.id, 
        email: user.email, 
        password: user.password 
      }),
    }).then(async (response) => {
      const data = await response.json();
      if (data.token) {
        console.log("Login successful");
        await SecureStore.setItemAsync('userToken', data.token);
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        navigation.navigate('MainSimulacros');
      } else {
        console.log("Login failed");
        alert("Error al iniciar sesión. Verifica tus credenciales.");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/Logos/Logo.png')}
        style={styles.logo}
      />
      <View style = {styles.user_container}>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} showsVerticalScrollIndicator = {false}>

      {/* Input de Email */}
      <Text style={styles.regular_text}>Email o Usuario</Text>
      <TextInput
        placeholder="Email o Usuario"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        value={user.email}
        onChangeText={(value) => onChangeInput('email', value)}
      />

      {/* Input de Contraseña */}
      <Text style = {styles.regular_text}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        value={user.password}
        onChangeText={(value) => onChangeInput('password', value)}
      />
      {/* Recuperar contraseña */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>¿Olvidaste tu contraseña? Recuperala</Text>
      </TouchableOpacity>

      {/* Botón de ingreso */}
      <TouchableOpacity style={styles.button}  onPress={onFormSubmit}>
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
        </ScrollView>
            </View>
    </View>
  );
};

export default Login;
