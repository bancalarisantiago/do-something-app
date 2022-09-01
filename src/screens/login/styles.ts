import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

export default StyleSheet.create({
 wrapper: {
    flex: 1,
  },
  container: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    height: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize:20,
  },
  titleApp: {
      fontSize: 40,
      color: colors.blue
  },
  divider: {
    width: '30%',
    borderColor: colors.blue,
    borderWidth: 0.5,
  },
  iconLogin : {
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
    borderColor: 'transparent',
    backgroundColor: colors.blue,
  },
   btnRegister: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    backgroundColor: 'transparent'
  },
  
})