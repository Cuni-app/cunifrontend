import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Footer from "../../Componentes/Footer/Footer";
import PerfilImg from "../../assets/Perfil/iconuser.png";
import styles from '../../styles/Perfil/Perfil.styles';
import { useState } from "react";
import { Animated } from "react-native";






const PerfilScreen = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [pressAnim] = useState(new Animated.Value(0));
  const onPressIn = () => {
    Animated.timing(pressAnim, {
      toValue: 1,
      duration: 100, // velocidad del "hundimiento"
      useNativeDriver: false,
    }).start();
  };
  
  const onPressOut = () => {
    Animated.timing(pressAnim, {
      toValue: 0,
      duration: 100, // velocidad al soltar
      useNativeDriver: false,
    }).start();
  };
  const animatedStyle = {
    transform: [
      {
        translateY: pressAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 4],
        }),
      },
    ],
    
    backgroundColor: pressAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["#917DBC", "#6d5e8d"], // color al presionar
    }),
  };
  
  

  return (
    <View style={styles.backgroundContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.profileContainer}>
            <Image source={PerfilImg} style={styles.profileImage} />
            <Text style={[styles.profileName, styles.shadowText]}>Sergio tu Papi</Text>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>📅 14 de Abril</Text>
              <Text style={[styles.locationText, styles.marginLeft]}>📍 Lima, Perú</Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            {['EXP', 'RANGO', 'RACHA'].map((item, index) => (
              <View key={index} style={styles.statBox}>
                <Text style={styles.statTitle}>{item}</Text>
                <Text style={styles.statValue}>{item === 'RANGO' ? 'Sin rango' : '0'}</Text>
                {item !== 'RANGO' && <Text style={styles.statSubtitle}>{item === 'EXP' ? 'Puntos' : 'Días'}</Text>}
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>Se parte de Cuni +</Text>
          </TouchableOpacity>
          <View style={styles.friendsContainer}>
            <Text style={[styles.sectionTitle, styles.shadowText]}>Lista de amigos</Text>
            <Text style={styles.noFriendsText}>Aún no tienes amigos :c</Text>
            <View style={styles.buttonWrapper}>
            <View style={styles.shadowLayer} />
            <Animated.View style={[styles.addButton, animatedStyle]}>
            <TouchableOpacity
            
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              style={[StyleSheet.absoluteFill, { justifyContent: "center", alignItems: "center" }]}
              // 🔥 Esto hace que el botón ocupe todo el contenedor, confia en mi XD rafa ponlo por que antes de esto el boton solo funcionaba en un lugar especifico el click Xd

            >
              <Text style={styles.addButtonText}>Agregar</Text>
            </TouchableOpacity>
          </Animated.View>

          </View>

          </View>
          <View style={styles.suggestionsContainer}>
            <View style={styles.suggestionsHeader}>
              <Text style={[styles.sectionTitle, styles.shadowText, styles.paddingBottom]}>Sugerencias de amigos</Text>
              <Text style={styles.viewAllText}>Ver todos</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3].map((item, index) => (
                <View key={index} style={styles.suggestionCard}>
                  <Image source={{ uri: "X" }} style={styles.suggestionImage} />
                  <Text style={styles.suggestionName}>Floppa</Text>
                  <Text style={styles.suggestionDescription}>Es posible que se conozcan</Text>
                  <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Seguir</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default PerfilScreen;
  