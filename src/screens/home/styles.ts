import { StyleSheet } from 'react-native';
import fonts from '../../globals/fonts'
import colors from '../../globals/colors'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    height: '30%',
  },
  dropDownsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dropDown: {
    width: '50%',
    marginLeft: 10,
    marginRight: 10,
  },
  activity: {
    height: '50%'
  }
})