import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#806FAE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%'
  },
  sim_container:{
    paddingHorizontal: 1,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 15,
    marginHorizontal: 9,
    minWidth: '40%',
    minHeight: '20%',
    textAlign: 'center',
    textAlignVertical: 'bottom',
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
  }
})
export default styles