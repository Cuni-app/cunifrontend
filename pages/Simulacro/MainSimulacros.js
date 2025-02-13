import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Simulacro/MainSimulacros.styles';

const MainSimulacros = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>SIMULACROS</Text>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.sim_container}>
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
        </View>


    )
}
export default MainSimulacros;