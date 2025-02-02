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
    fontSize: 24,
    fontWeight: 'bold',
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: '#fff',
  },
  linkText: {
    color: '#FEE000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default styles;
