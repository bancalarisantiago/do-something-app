import { StyleSheet } from 'react-native';
import fonts from '../../globals/fonts'
import colors from '../../globals/colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  titleContainer: {
    width: '50%',
    height: '20%',
  },
  title: {
    fontSize: 20,
    color: colors.blue
  },
  btnRefresh: {
    width: '50%',
    padding: 10,
    backgroundColor: 'red'
  },
  subtitle: {},
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
  tableInfo: {},
  activity: {

  },
  addedContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  }
})