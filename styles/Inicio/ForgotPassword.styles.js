import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#806FAE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  user_container: {
    flex: 0.75,
    width: 325,
    borderRadius: 15,
    backgroundColor: '#F0E9C0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#352A54',
    textAlign: 'center',
    marginBottom: 20,
  },
  regular_text: {
    textAlign:'left',
    color: '#352A54',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14
  },
  input: {
    width: '100%',
    fontFamily: 'Poppins_500Medium',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#46336E',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    fontSize: 16,
  },
  login: {
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#352A54',
  },
  loginLink: {
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#352A54',
    textDecorationLine: 'underline',
  },
});

export default styles;
