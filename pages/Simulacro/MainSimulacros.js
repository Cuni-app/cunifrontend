import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from '../../styles/Simulacro/MainSimulacros.styles';
import overlaystyles from '../../styles/Simulacro/Descripcion.styles';
import Footer from '../../Componentes/Footer/Footer';
import Header from '../../Componentes/Header/Header';

const MainSimulacros = ({ navigation }) => {
    const [showOverlay, setShow] = useState(false);
    const [selectedSimulacro, setSelectedSimulacro] = useState(null);

    const simulacros = [
        { id: 'Completo', img: require('../../assets/Simulacro/Main/Completo.png') },
        { id: 'Letras', img: require('../../assets/Simulacro/Main/Letras.png') },
        { id: 'Matemáticas', img: require('../../assets/Simulacro/Main/Matematicas.png') },
        { id: 'Historia', img: require('../../assets/Simulacro/Main/Historia.png') },
        { id: 'Razonamiento', img: require('../../assets/Simulacro/Main/Razonamiento.png') },
        { id: 'Ciencias', img: require('../../assets/Simulacro/Main/Ciencias.png') },
        { id: 'Cultura General', img: require('../../assets/Simulacro/Main/General.png') },
    ];

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
            
            <View style={styles.row}>
                {simulacros.map((simulacro) => (
                    <TouchableOpacity
                        key={simulacro.id}
                        style={styles.sim_container}
                        onPress={() => openPopup(simulacro)}
                    >
                        <Image source={simulacro.img} style={styles.thumbnails} />
                        <Text style={styles.sim_text}>{simulacro.id}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Modal con cierre al tocar fuera */}
            <Modal visible={showOverlay} onRequestClose={closePopup} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={closePopup}>
                    <View style={overlaystyles.overlay}>
                        <View style={overlaystyles.popup_container}>
                            <Text style={overlaystyles.popup_title}>{selectedSimulacro?.id}</Text>
                            <Text style={overlaystyles.bold_text}>Simulacro Parcial:</Text>
                            <Text style={overlaystyles.text}>20 preguntas</Text>
                            <Text style={overlaystyles.bold_text}>Simulacro Completo:</Text>
                            <Text style={overlaystyles.text}>80 preguntas en 180 minutos</Text>

                            <TouchableOpacity style={overlaystyles.button_partial} onPress={() => {
                                navigation.navigate('Parcial');
                                closePopup()
                            }}>
                                <Text style={overlaystyles.buttonText}>Parcial</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={overlaystyles.button_complete} onPress={() => {
                                navigation.navigate('Parcial', { simulacro: selectedSimulacro?.id });
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
