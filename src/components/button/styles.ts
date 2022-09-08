import { StyleSheet } from 'react-native';
import colors from '../../globals/colors'

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnDisabled: {
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  label: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  activityIndicator: {
    paddingLeft: 10,
  },

})