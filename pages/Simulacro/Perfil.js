import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const PerfilScreen = () => {
  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.sectionTitle}>Lista de amigos</Text>
        <Text style={styles.noFriendsText}>Aún no tienes amigos :c</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.suggestionsContainer}>
        <View style={styles.suggestionsHeader}>
          <Text style={styles.sectionTitle}>Sugerencias de amigos</Text>
          <Text style={styles.viewAllText}>Ver todos</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestionsList}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35285C"
  },
  header: {
    backgroundColor: "#4B3178",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  profileContainer: {
    alignItems: "center"
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileName: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  locationText: {
    color: "#CCC",
    fontSize: 14
  },
  marginLeft: {
    marginLeft: 10
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20
  },
  statBox: {
    backgroundColor: "#F5E1A8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 100
  },
  statTitle: {
    fontWeight: "bold",
    color: "#35285C"
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#35285C"
  },
  statSubtitle: {
    color: "#35285C"
  },
  mainButton: {
    backgroundColor: "#F5A623",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  mainButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  friendsContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  noFriendsText: {
    color: "#BBB",
    marginVertical: 5
  },
  addButton: {
    backgroundColor: "#6C4AB6",
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  suggestionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  suggestionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewAllText: {
    color: "#F5A623"
  },
  suggestionsList: {
    marginTop: 10
  },
  suggestionCard: {
    backgroundColor: "#5D3E99",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    width: 120
  },
  suggestionImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  suggestionName: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5
  },
  suggestionDescription: {
    color: "#CCC",
    fontSize: 12,
    textAlign: "center"
  },
  followButton: {
    backgroundColor: "#F5A623",
    padding: 5,
    borderRadius: 5,
    marginTop: 5
  },
  followButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold"
  }
});

export default PerfilScreen;
