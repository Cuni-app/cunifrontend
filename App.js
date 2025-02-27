import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaInicio from './pages/Inicio/PantallaInicio';
import Login from './pages/Inicio/Login';
import Register from './pages/Inicio/Register';
import ForgotPassword from './pages/Inicio/ForgotPassword';
import VerifyCode from './pages/Inicio/VerifyCode';
import ResetPassword from './pages/Inicio/ResetPassword';
import MainSimulacros from './pages/Simulacro/MainSimulacros';
import Pregunta from './pages/Simulacro/Pregunta';
import Parcial from './pages/Simulacro/Parcial';
import Perfil from './pages/Simulacro/Perfil';


import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={PantallaInicio} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="MainSimulacros" component={MainSimulacros} options={{ headerShown: false }} />
        <Stack.Screen name="Pregunta" component={Pregunta} options={{ headerShown: false }} />
        <Stack.Screen name="Parcial" component={Parcial} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
