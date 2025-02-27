import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from "react-native";


const Perfil = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: "X" }} style={styles.profileImage} />
          <Text style={styles.profileName}>Daniela</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>📅 14 de Abril</Text>
            <Text style={[styles.locationText, styles.marginLeft]}>📍 Lima, Perú</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};



export default Perfil;
