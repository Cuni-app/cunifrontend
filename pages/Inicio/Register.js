import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Inicio/Register.styles';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleRegister = () => {
      if(email == ''){
        alert('Correo inválido');
      }
      else if (user == ''){
        alert('Usuario inválido');
      }
      else if (password == ''){
        alert('Contraseña inválida')
      }
      else if (password != confirm){
        alert('Confirmar contraseña debe ser igual a su contraseña');
      }
      else{
        alert('Cuenta creada');
      }
    };

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
      <Text style= {styles.regular_text}>Usuario</Text>    
      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        onChangeText={setUser}
        />

      {/* Input de Email */}
      <Text style= {styles.regular_text}>Email</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#bfbfbf"
        style={styles.input}
        onChangeText={setEmail}
        />

      {/* Input de Contraseña */}
      <Text style= {styles.regular_text}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
        />

      {/* Confirmar Contraseña */}
      <Text style= {styles.regular_text}>Confirmar Contraseña</Text>    
      <TextInput
        placeholder="Confirmar contraseña"
        placeholderTextColor="#bfbfbf"
        secureTextEntry
        style={styles.input}
        onChangeText={setConfirm}
      />

      {/* Botón de términos */}
      <Text style={styles.terms}>
        Aceptar{' '}
        <Text style={styles.termsLink}>términos y condiciones</Text>
      </Text>

      {/* Botón de registro */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
