import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  Modal,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styles from '../../styles/Simulacro/MainSimulacros.styles';
import overlaystyles from '../../styles/Simulacro/Descripcion.styles';
import Footer from '../../Componentes/Footer/Footer';
import Header from '../../Componentes/Header/Header';

const MainSimulacros = ({ navigation }) => {
  // Estado inicializado correctamente como array vacío
  const [simulacros, setSimulacros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShow] = useState(false);
  const [selectedSimulacro, setSelectedSimulacro] = useState(null);

  // Referencias para animaciones (vacías al inicio)
  const animateMapRef = useRef([]);
  const pressAnim = useRef([]);

  useEffect(() => {
    const fetchSimulacros = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/category/getAll`);
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();

        // Verificamos que data sea un arreglo
        if (!Array.isArray(data)) {
          console.warn('La respuesta del servidor no es un array:', data);
          setSimulacros([]);
          setIsLoading(false);
          return;
        }

        // Mapa de nombres de imagen a require(...)
        const simulacroImgs = [
          'Completo.png',
          'Letras.png',
          'Matematicas.png',
          'Historia.png',
          'Razonamiento.png',
          'Ciencias.png',
          'General.png',
        ];
        const simulacroImgsMap = {
          'Completo.png': require('../../assets/Simulacro/Main/Completo.png'),
          'Letras.png': require('../../assets/Simulacro/Main/Letras.png'),
          'Matematicas.png': require('../../assets/Simulacro/Main/Matematicas.png'),
          'Historia.png': require('../../assets/Simulacro/Main/Historia.png'),
          'Razonamiento.png': require('../../assets/Simulacro/Main/Razonamiento.png'),
          'Ciencias.png': require('../../assets/Simulacro/Main/Ciencias.png'),
          'General.png': require('../../assets/Simulacro/Main/General.png'),
        };

        // Creamos el arreglo de objetos que usaremos para renderizar
        const simulacrosData = data.map((sim, index) => {
          const nombreImg = simulacroImgs[index] || 'General.png';
          return {
            id: sim.nombre || `simulacro-${index}`,
            preg_parcial: sim.preg_parcial || '20',
            preg_comp: sim.preg_comp || '80',
            tiempo_parcial: sim.tiempo_parcial || '60',
            tiempo_comp: sim.tiempo_comp || '180',
            img: simulacroImgsMap[nombreImg] || simulacroImgsMap['General.png'],
          };
        });

        // —––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        // ¡AQUÍ es donde inicializo las animaciones SINCRÓNICAMENTE!
        // —––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
        animateMapRef.current = simulacrosData.map(() => new Animated.Value(0));
        pressAnim.current = simulacrosData.map(() => new Animated.Value(0));

        // Finalmente, guardamos en el estado y bajamos isLoading
        setSimulacros(simulacrosData);
      } catch (error) {
        console.error('Error al obtener simulacros:', error);
        setSimulacros([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimulacros();
  }, []); // <-- solo se ejecuta al montar

  // Funciones para animar al presionar
  const animateIn = (index) => {
    Animated.timing(animateMapRef.current[index], {
      toValue: 10,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(pressAnim.current[index], {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const animateOut = (index) => {
    Animated.timing(animateMapRef.current[index], {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(pressAnim.current[index], {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const openPopup = (simulacro) => {
    setSelectedSimulacro(simulacro);
    setShow(true);
  };
  const closePopup = () => {
    setShow(false);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>SIMULACROS</Text>

      <ScrollView
        contentContainerStyle={{
          minWidth: '100%',
          alignItems: 'center',
          alignContent: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.row}>
          {simulacros.map((simulacro, index) => (
            <View style={styles.buttonWrapper} key={simulacro.id}>
              <View style={styles.shadowLayer} />
              <Animated.View
                style={[
                  {
                    transform: [{ translateY: animateMapRef.current[index] }],
                    backgroundColor: pressAnim.current[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: ['#917DBC', '#6d5e8d'],
                    }),
                  },
                  styles.sim_container,
                ]}
              >
                <TouchableOpacity
                  onPress={() => openPopup(simulacro)}
                  onPressIn={() => animateIn(index)}
                  onPressOut={() => animateOut(index)}
                >
                  <Image source={simulacro.img} style={styles.thumbnails} />
                  <Text style={styles.sim_text}>{simulacro.id}</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal visible={showOverlay} onRequestClose={closePopup} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={closePopup}>
          <View style={overlaystyles.overlay}>
            <View style={overlaystyles.popup_container}>
              <Text style={overlaystyles.popup_title}>{selectedSimulacro?.id}</Text>
              <Text style={overlaystyles.bold_text}>Simulacro Parcial:</Text>
              <Text style={overlaystyles.text}>
                {selectedSimulacro?.preg_parcial} preguntas en {selectedSimulacro?.tiempo_parcial} minutos
              </Text>
              <Text style={overlaystyles.bold_text}>Simulacro Completo:</Text>
              <Text style={overlaystyles.text}>
                {selectedSimulacro?.preg_comp} preguntas en {selectedSimulacro?.tiempo_comp} minutos
              </Text>

              <TouchableOpacity
                style={overlaystyles.button_partial}
                onPress={() => {
                  navigation.navigate('Parcial', { simulacro: selectedSimulacro, tipo: 'Parcial' });
                  closePopup();
                }}
              >
                <Text style={overlaystyles.buttonText}>Parcial</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={overlaystyles.button_complete}
                onPress={() => {
                  navigation.navigate('Parcial', { simulacro: selectedSimulacro, tipo: 'Completo' });
                  closePopup();
                }}
              >
                <Text style={overlaystyles.buttonText}>Completo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Footer />
    </View>
  );
};

export default MainSimulacros;