import { StyleSheet } from 'react-native';
import fonts from '../../globals/fonts'
import colors from '../../globals/colors'

export default StyleSheet.create({
  container: {
    width: '90%',
    height: '12%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  content: {
    width: '80%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  description: {
    width: '70%',
  },
  type: {

  },
  iconLabel: {
    fontSize: 10
  },
  icon: {
    width: '20%',
    height: '100%',
  },
  btnActivity: {
    width: '20%'
  }


})