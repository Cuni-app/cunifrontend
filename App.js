import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name = "Inicio"
            component = {PantallaInicio}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const PantallaInicio = ({navigation}) => {
  return(
    <View style={styles.container}>
    <Image
      source={require('./assets/Logos/Logo.png')} 
      style={styles.image}
    />
    <Image
      source={require('./assets/Logos/CUNI 1.png')} 
    />

    <Text style={styles.description}>
      ¡Prepararte nunca fue tan fácil!
    </Text>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Empezar</Text>
    </TouchableOpacity>

    <Text style={styles.link}>
      Ya tengo una cuenta,{' '}
      <Text style={styles.linkText}>Ingresar</Text>
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a58af9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#46336E',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: '#fff',
  },
  linkText: {
    color: '#FEE000', 
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});