import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#806FAE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 75,
    marginBottom: 20,
  },
  mascot: {
    width: 250,
    height: 350,
    marginBottom: 20
  },
  description: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#46336E',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#fff',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  linkText: {
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#fff',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default styles;
