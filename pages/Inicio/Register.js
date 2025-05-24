import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Inicio/Register.styles';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const onChangeInput = (field, value) => {
    setUser({
      ...user,
      [field]: value
    });
  };

  const handleRegister = () => {
    if (user.email == ''){
      alert('Correo inválido');
      return false;
    }
    else if (user.nombre == ''){
      alert('Usuario inválido');
      return false
    }
    else if (user.password == ''){
      alert('Contraseña inválida')
      return false;
    }
    else if (user.confirmPassword !== user.password){
      alert('Confirmar contraseña debe ser igual a su contraseña');
      return false;
    } else {
      return true;
    }
  };

  const onFormSubmit = () => {
    // Aquí puedes manejar el registro del usuario
    console.log(process.env.EXPO_PUBLIC_API_URL);
    const validation = handleRegister();
    if (validation == false){
      return;
    }
    
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/user/registro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: user.nombre,
        email: user.email,
        password: user.password
      }),
    }).then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        console.log("Registro exitoso");
        await SecureStore.setItemAsync('userToken', data.token);
        await AsyncStorage.setItem('user', JSON.stringify({
          id: data.user.id,
          email: data.user.email,
          nombre: data.user.nombre,
        }));
        navigation.navigate('MainSimulacros');
      } else {
        alert('Este email esta en uso');
        console.log("Error en el registro");
      }
    })
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
        
      {/* Input de Usuario */}
      <Text style= {styles.regular_text}>Nombres y Apellidos</Text>    
      <TextInput
        placeholder="Nombres y Apellidos"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        value={user.nombre}
        onChangeText={(value) => onChangeInput('nombre', value)}
      />

      {/* Input de Email */}
      <Text style= {styles.regular_text}>Email</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        value={user.email}
        onChangeText={(value) => onChangeInput('email', value)}
        />

      {/* Input de Contraseña */}
      <Text style= {styles.regular_text}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        value={user.password}
        onChangeText={(value) => onChangeInput('password', value)}
        />

      {/* Confirmar Contraseña */}
      <Text style= {styles.regular_text}>Confirmar Contraseña</Text>    
      <TextInput
        placeholder="Confirmar contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        value={user.confirmPassword}
        onChangeText={(value) => onChangeInput('confirmPassword', value)}
      />

      {/* Botón de términos */}
      <Text style={styles.terms}>
        Aceptar{' '}
        <Text style={styles.termsLink}>términos y condiciones</Text>
      </Text>

      {/* Botón de registro */}
      <TouchableOpacity style={styles.button} onPress={onFormSubmit}>
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
              </ScrollView>
          </View>
    </View>
  );
};

export default Register;
