import { StyleSheet } from 'react-native';
import fonts from '../../globals/fonts'
import colors from '../../globals/colors'

export default StyleSheet.create({
  container: {
    width: 340,
    height: 100,
    margin: 10,
    backgroundColor: colors.turquoise,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000000',
    elevation: 4,
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: -3,
    },

  },
  description: {
    width: '60%',
    alignItems: 'center',
  },
  type: {
    margin: 5,
    fontSize: 15,
    fontWeight: '900',
  },
  number: {
    fontWeight: '900',
  },
  iconLabel: {
    fontSize: 9
  },
  icon: {
    width: '20%',
    alignItems: 'center',
  },
  btnActivity: {
    width: '20%',
  }


})