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
    flex: 0.95,
    width: 325,
    borderRadius: 15,
    backgroundColor: '#F0E9C0',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 75,
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
  terms: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#352A54',
    marginBottom: 20,
    textAlign: 'center',
  },
  termsLink: {
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#352A54',
    textDecorationLine: 'underline',
    marginBottom: 20,
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
  or: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  login: {
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#352A54',
    marginBottom: 20,
  },
  loginLink: {
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#352A54',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default styles;
