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
    height: '65%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
  subtitle: {
    fontSize: 15,
  },

  divider: {
    width: '30%',
    borderColor: colors.turquoise,
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
  },
  buttons: {
    width: "80%",
    alignText: 'center',
  },
  btnLogin: {
    margin: 5,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: colors.turquoise,
    fontFamily: 'Roboto-Bold',
  },
  btnRegister: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.turquoise,
    backgroundColor: 'transparent',
    fontFamily: 'Roboto-Bold',
  },

})