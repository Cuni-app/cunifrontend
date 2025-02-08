import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../styles/Simulacro/MainSimulacros.styles';

const MainSimulacros = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.row}>
                <View style = {styles.sim_container}>
                    <Text> AAAAA</Text>
                </View>
                <View style = {styles.sim_container}>
                    <Text> AAAAA</Text>
                </View>

            </View>
        </View>


    )
}
export default MainSimulacros;