import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

//Provider
import { removeAllAsyncData, removeSecureItem } from '../../storage';
import { persistor, store } from '../../redux/store'

//Components 
import Button from '../../components/button';
import { useAuth } from '../../context/AuthProvider';

//Styles
import styles from './styles';

//Globlas
import colors from '../../globals/colors';

const Settings: React.FC = () => {

  const { setIsAuth } = useAuth();


  async function deleteAccount() {
    //The idea is to remove al data user from DB , SecureStorate and AsyncStorage
    store.dispatch({ type: "RESET" });
    removeSecureItem('token');
    setIsAuth(false);
  }

  async function logOut() {
    removeSecureItem('token');
    setIsAuth(false);
  }

  // async function resetPassword() {
  //   setIsAuth(false);
  // }


  return (
    <View style={styles.wrapper}>
      {/* <Button style={{ backgroundColor: 'red' }} label="RESET PASSWORD" onPress={() => resetPassword()}></Button> */}
      <Button style={{ backgroundColor: colors.blue, width: '50%', padding: 10, margin: 10 }} label="LOG OUT" onPress={() => logOut()}></Button>
      <Button style={{ backgroundColor: 'red', width: '50%', padding: 10, margin: 10 }} label="DELETE ACCOUNT" onPress={() => deleteAccount()}></Button>
    </View>
  )
}

export default Settings;