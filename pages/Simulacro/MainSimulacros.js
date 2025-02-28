import React, { useState , useRef} from 'react';
import { View, Text, Animated, Modal, Image, TouchableOpacity,TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../../styles/Simulacro/MainSimulacros.styles';
import overlaystyles from '../../styles/Simulacro/Descripcion.styles';
import Footer from '../../Componentes/Footer/Footer';
import Header from '../../Componentes/Header/Header';

const MainSimulacros = ({ navigation }) => {
    const [showOverlay, setShow] = useState(false);
    const [selectedSimulacro, setSelectedSimulacro] = useState(null);

    var [ isPress, setIsPress ] = React.useState(false);
    
    const simulacros = [
        { id: 'Completo', preg_parcial:'20',preg_comp:'80',tiempo_parcial:'60',tiempo_comp:'180', img: require('../../assets/Simulacro/Main/Completo.png') },
        { id: 'Letras', preg_parcial:'20',preg_comp:'80',tiempo_parcial:'60',tiempo_comp:'180',img: require('../../assets/Simulacro/Main/Letras.png') },
        { id: 'Matemáticas', preg_parcial:'20',preg_comp:'80',tiempo_parcial:'60',tiempo_comp:'180',img: require('../../assets/Simulacro/Main/Matematicas.png') },
        { id: 'Historia', preg_parcial:'20',preg_comp:'80',tiempo_parcial:'60',tiempo_comp:'180',img: require('../../assets/Simulacro/Main/Historia.png') },
        { id: 'Razonamiento', preg_parcial:'20',preg_comp:'80',tiempo_parcial:'60',tiempo_comp:'180',img: require('../../assets/Simulacro/Main/Razonamiento.png') },
        { id: 'Ciencias', preg_parcial:'20',preg_comp:'80',tiempo_parcial:'60',tiempo_comp:'180',img: require('../../assets/Simulacro/Main/Ciencias.png') },
        { id: 'Cultura General', preg_parcial:'20',preg_comp:'80',tiempo_parcial:'60',tiempo_comp:'180',img: require('../../assets/Simulacro/Main/General.png') },
    ];
    const animateMapRef = useRef(simulacros.map(() => new Animated.Value(0)));


    
    const animateIn =(index)=>{
        Animated.timing(animateMapRef.current[index],{
            toValue: -10,
            duration: 200,
            useNativeDriver: 'true'
        }).start()
    };
    const animateOut = (index)=>{
        Animated.timing(animateMapRef.current[index],{
            toValue: 0,
            duration: 200,
            useNativeDriver: 'true'
        }).start()
    };

    const openPopup = (simulacro) => {
        setSelectedSimulacro(simulacro);
        setShow(true);
    };

    const closePopup = () => {
        setShow(false);
    };

    return (
        
        <View style={styles.container}>
            <Header/>
            <Text style={styles.title}>SIMULACROS</Text>
            
            <ScrollView contentContainerStyle={{ minWidth: '100%', alignItems: 'center',alignContent: 'center'}} showsVerticalScrollIndicator = {false}>
            <View style={styles.row}>
                {simulacros.map((simulacro, index) => (
                    <TouchableHighlight
                        key={simulacro.id}
                        style={styles.sim_container}
                        onPress={() => openPopup(simulacro)}
                        onPressIn={()=>animateIn(index)}
                        onPressOut={()=>animateOut(index)}
                    >
                        <Animated.View style={[ {transform:
                            [{translateY: animateMapRef.current[index]}]
                        }    
                        ]}>
                            <Image source={simulacro.img} style={styles.thumbnails} />
                            <Text style={styles.sim_text}>{simulacro.id}</Text>
                        </Animated.View>
                    </TouchableHighlight>
                ))}
            </View>
                                </ScrollView>

            {/* Modal con cierre al tocar fuera */}
            <Modal visible={showOverlay} onRequestClose={closePopup} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={closePopup}>
                    <View style={overlaystyles.overlay}>
                        <View style={overlaystyles.popup_container}>
                            <Text style={overlaystyles.popup_title}>{selectedSimulacro?.id}</Text>
                            <Text style={overlaystyles.bold_text}>Simulacro Parcial:</Text>
                            <Text style={overlaystyles.text}>{selectedSimulacro?.preg_parcial} preguntas en {selectedSimulacro?.tiempo_parcial} minutos</Text>
                            <Text style={overlaystyles.bold_text}>Simulacro Completo:</Text>
                            <Text style={overlaystyles.text}>{selectedSimulacro?.preg_comp} preguntas en {selectedSimulacro?.tiempo_comp} minutos</Text>

                            <TouchableOpacity style={overlaystyles.button_partial} onPress={() => {
                                navigation.navigate('Parcial', { simulacro: selectedSimulacro, tipo: 'Parcial' });
                                closePopup()
                            }}>
                                <Text style={overlaystyles.buttonText}>Parcial</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={overlaystyles.button_complete} onPress={() => {
                                navigation.navigate('Parcial', { simulacro: selectedSimulacro, tipo: 'Completo' });
                                closePopup()
                            }} >
                                <Text style={overlaystyles.buttonText}>Completo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Footer/>
        </View>
            
    );
};

export default MainSimulacros;
