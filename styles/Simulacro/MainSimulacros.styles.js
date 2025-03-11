import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#806FAE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', // Esto centra los cuadros dentro del contenedor

    flexWrap: 'wrap',
    width: '90%',
    paddingBottom: '30%'
    
  },
  sim_container:{
    paddingHorizontal: 1,
    paddingVertical: '8%',
    borderRadius: 20,
    alignSelf:'stretch',
    marginHorizontal: '1%',
    marginBottom: 15,
    marginHorizontal: 9,
    minWidth: '40%',
    minHeight: '10%',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    verticalAlign: 'middle',    
    position: 'relative',
  },
  sim_container_pressed:{
    paddingHorizontal: 1,
    paddingVertical: '8%',
    borderRadius: 15,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 15,
    marginHorizontal: 9,
    minWidth: '40%',
    minHeight: '20%',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    verticalAlign: 'middle',    
    backgroundColor: '#6C5C93'
  },
  title:{
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: "#FAF3CF",
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },
  sim_text:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: "#FAF3CF",
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },
  thumbnails:{
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    verticalAlign: 'middle'
  },
  shadowLayer: {
    backgroundColor: "#6d5e8d", 
    borderRadius: 20,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    alignContent: 'center',
    top: 10,
    left: 9,
    right: 9,
    bottom: 0,
  },
  buttonWrapper: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: 'center',
    textAlign:'center',
    position: 'relative',
    marginTop: 10,
    marginHorizontal: '1%',
    minWidth: '43%',
    minHeight: '20%'
  },
  

})
export default styles