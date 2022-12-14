import { StyleSheet } from 'react-native';
import fonts from '../../globals/fonts'
import colors from '../../globals/colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  titleContainer: {
    width: '70%',
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 20,
    color: colors.blue
  },
  btnRefresh: {
    width: '40%',
    margin: 15,
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
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
  activityBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  addedContainer: {
    height: '10%',
    width: '100%',
    alignItems: 'center'
  },
  titleRecently: {
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
    justifyContent: 'center'
  },
  divider: {
    width: '100%',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftLine: {
    width: '25%',
    borderWidth: 1,
    borderColor: colors.lightBlue,
  },
  rightLine: {
    width: '25%',
    borderWidth: 1,
    borderColor: colors.lightBlue,

  }
})