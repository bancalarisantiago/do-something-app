import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperContent: {
    width: '80%',
    height: '75%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  shadow: {
    shadowColor: '#000',
    elevation: 20,
    shadowOffset: {
      width: 10,
      height: -20,
    },
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 20,
  },
  titleApp: {
    familyFont: 'Roboto-Black',
    fontSize: 40,
    color: colors.blue
  },
  divider: {
    width: '30%',
    borderColor: colors.blue,
    borderWidth: 0.5,
  },
  iconLogin: {
    position: 'absolute',
    top: -25,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  inputs: {
    width: "80%",
    alignItems: 'center',
  },
  buttons: {
    width: "80%",
    alignText: 'center',
  },
  btnLogin: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: colors.turquoise,
  },
  btnRegister: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.turquoise,
    backgroundColor: 'transparent'
  },

})