import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Footer from "../../Componentes/Footer/Footer";
import PerfilImg from "../../assets/Perfil/iconuser.png";

const PerfilScreen = () => {
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
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Agregar</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#806fae",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  paddingBottom: {
    paddingBottom: 10,
  },

  innerContainer: {
    backgroundColor: "#35285C",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginTop: '10%',
    marginBottom: '25%'
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  shadowText: {
    textShadowColor: "#faf3cf",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  locationText: {
    color: "#CCC",
    fontSize: 14,
  },
  marginLeft: {
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    width: "100%",
  },
  statBox: {
    backgroundColor: "#F5E1A8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 95,
    margin: '1%'
  },
  statTitle: {
    fontWeight: "bold",
    color: "#35285C",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#35285C",
  },
  statSubtitle: {
    color: "#35285C",
  },
  mainButton: {
    backgroundColor: "#F5A623",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  mainButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  friendsContainer: {
    marginTop: 20,
    width: "100%",
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  noFriendsText: {
    color: "#BBB",
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: "#6C4AB6",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  suggestionsContainer: {
    marginTop: 20,
    width: "100%",
  },
  suggestionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewAllText: {
    color: "#F5A623",
  },
  suggestionCard: {
    backgroundColor: "#5D3E99",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    width: 120,
  },
  suggestionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  suggestionName: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  suggestionDescription: {
    color: "#CCC",
    fontSize: 12,
    textAlign: "center",
  },
  followButton: {
    backgroundColor: "#F5A623",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  followButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default PerfilScreen;
  