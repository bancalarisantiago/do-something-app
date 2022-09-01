import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

export default StyleSheet.create({
 wrapper: {
    flex: 1,
    height: '100%',
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
  },
  divider: {
    width: '30%',
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
  },
  iconLogin : {
    position: 'absolute',
    top: -40,
    width: 80,
    height: 80,
    resizeMode: 'stretch',
  },
  btnLogin: {
    width: "80%",
    margin: 5,
    padding: 10,
    backgroundColor: 'blue',
  },
   btnRegister: {
    width: "80%",
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'transparent'
  },
  title: {
    backgroundColor: 'transparent',
    fontSize:20,
  },
})