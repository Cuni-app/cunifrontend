import React, { useState } from 'react';
import { View, Text, Modal, TextInput,TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Simulacro/MainSimulacros.styles';
import overlaystyles from '../../styles/Simulacro/Descripcion.styles';

const MainSimulacros = ({ navigation }) => {
    const [showOverlay,setShow] = useState(false);
    const Popup=(value)=>{
        setShow(value);
    };
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>SIMULACROS</Text>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.sim_container} onPress={()=>Popup(true)}>
                    <Image
                        source={require('../../assets/Simulacro/Main/Completo.png')}
                        style={styles.thumbnails}
                    />
                    <Text style = {styles.sim_text}>Completo</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.sim_container}>
                    <Image
                        source={require('../../assets/Simulacro/Main/Letras.png')}
                        style={styles.thumbnails}
                    />
                    <Text style = {styles.sim_text}>Letras</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.sim_container}>
                    <Image
                        source={require('../../assets/Simulacro/Main/Matematicas.png')}
                        style={styles.thumbnails}
                    />
                    <Text style = {styles.sim_text}>Matemáticas</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.sim_container}>
                    <Image
                        source={require('../../assets/Simulacro/Main/Historia.png')}
                        style={styles.thumbnails}
                    />
                    <Text style = {styles.sim_text}>Historia</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.sim_container}>
                    <Image
                        source={require('../../assets/Simulacro/Main/Razonamiento.png')}
                        style={styles.thumbnails}
                    />
                    <Text style = {styles.sim_text}>Razonamiento</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.sim_container}>
                    <Image
                        source={require('../../assets/Simulacro/Main/Ciencias.png')}
                        style={styles.thumbnails}
                    />
                    <Text style = {styles.sim_text}>Ciencias</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.sim_container}>
                    <Image
                        source={require('../../assets/Simulacro/Main/General.png')}
                        style={styles.thumbnails}
                    />
                    <Text style = {styles.sim_text}>Cultura General</Text>
                </TouchableOpacity>
            </View>

            <Modal  visible={showOverlay} onRequestClose={()=>Popup(false)} presentationStyle='overFullScreen' transparent = {true}>
                <View style= {overlaystyles.popup_container}>
                <Text style = {overlaystyles.popup_title}>Tipo Simulacro</Text>
                <Text style = {overlaystyles.bold_text}>Simulacro Parcial: </Text> <Text style = {overlaystyles.text}>20 preguntas</Text>
                <Text style = {overlaystyles.bold_text}>Simulacro Completo: </Text> <Text style = {overlaystyles.text}>80 preguntas en 180 minutos</Text>
                <TouchableOpacity style = {overlaystyles.button_partial}>
                    <Text style = {overlaystyles.buttonText}>Parcial</Text>   
                </TouchableOpacity>  
                <TouchableOpacity style = {overlaystyles.button_complete}>
                    <Text style = {overlaystyles.buttonText}>Completo</Text>   
                </TouchableOpacity>  
                </View>
            </Modal>
        </View>


    )
}
export default MainSimulacros;