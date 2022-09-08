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

const Settings: React.FC = () => {

  const { setIsAuth } = useAuth();


  async function logOut() {
    removeAllAsyncData();
    removeSecureItem('token');
    store.dispatch({ type: "RESET" })
    setIsAuth(false)
  }


  return (
    <View style={styles.wrapper}>
      <Text>SETTINGSSSS</Text>
      <Button style={{ backgroundColor: 'red' }} label="LOG OUT/ CLEAR ALL DATA" onPress={() => logOut()}></Button>

      <Button style={{ backgroundColor: 'red' }} label="DELETE ACCOUNT" onPress={() => store.dispatch({ type: "RESET" })}></Button>
    </View>
  )
}

export default Settings;