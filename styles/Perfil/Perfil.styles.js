
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

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
    marginTop: height * 0.05,
    marginBottom: height * 0.1,
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
    width: width * 0.25,
    margin: 5,
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

  addButtonText: {
    color: "#352a54",
    fontWeight: "bold",
  },
  suggestionsContainer: {
    marginTop: 20,
    width: "100%",
  },
  suggestionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  addButton: {
  backgroundColor: "#917DBC",
  paddingVertical: 12,
  paddingHorizontal: 25,
  borderRadius: 10,
  alignItems: "center",
  width: "50%",
  alignSelf: "center",

  // Sombra para efecto 3D (solo al botón)
  shadowColor: "#6d5e8d",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1, // máximo permitido
  shadowRadius: 0,
  elevation: 6, // para Android
},
buttonWrapper: {
  alignSelf: "center",
  position: "relative",
  marginTop: 10,
  width: "50%",
  height: 50, 
},

shadowLayer: {
  backgroundColor: "#6d5e8d", 
  borderRadius: 10,
  position: "absolute",
  top: 4,
  left: 0,
  right: 0,
  bottom: 0,
},

addButton: {
  backgroundColor: "#917DBC",
  paddingVertical: 12,
  paddingHorizontal: 25,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 4,
},

addButtonPressed: {
  backgroundColor: "#6d5e8d",
  top: 4,
  bottom: 0,
},

followerCard: {
  marginTop: 10,
  marginBottom: 5,
  backgroundColor: "#5D3E99",
  padding: 10,
  borderRadius: 10,
  alignItems: "center",
  marginRight: 10,
},

followerName: {
  color: "#FFF",
  fontSize: 14,
  fontWeight: "bold",
  marginTop: 5,
},

followerImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
  
});

export default styles;
