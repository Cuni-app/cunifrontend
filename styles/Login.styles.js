import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#806FAE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user_container: {
    flex: 0.75,
    width: 325,
    overflow: 'scroll',
    borderRadius: 15,
    backgroundColor: '#F0E9C0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  /*logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },*/
  logo: {
    width: 150,
    height: 75,
    marginBottom: 20,
  },
  input: {
    width: '100%',
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
  forgotPassword: {
    fontSize: 14,
    color: '#fff',
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  terms: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  termsLink: {
    color: '#FEE000',
    textDecorationLine: 'underline',
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
  register: {
    fontSize: 14,
    color: '#fff',
  },
  registerLink: {
    color: '#FEE000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default styles;
