import { StyleSheet } from 'react-native';
import colors from '../../globals/colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: colors.blue,
    borderLeftWidth: 1,
    borderBottom: 4,
  },
  icon: {
    position: 'absolute',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  input: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 10,
    fontSize: 15,
    overflowX: 'auto',
  },
  errorMsgBox: {
    position: 'absolute',
    bottom: 0,
    left: 40,
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
  errorIcon: {
    position: 'absolute',
    bottom: 14,
    right: 0,
  }

})