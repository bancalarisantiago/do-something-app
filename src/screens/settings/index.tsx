import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

//Provider
import { removeAllAsyncData, removeSecureItem } from '../../storage';
import { persistor } from '../../redux/store'

//Components 
import Button from '../../components/button';
import { useAuth } from '../../context/AuthProvider';

//Styles
import styles from './styles';

const Settings: React.FC = () => {

  const { isAuth, setIsAuth } = useAuth();
  const navigation = useNavigation();

  async function logOut() {
    removeAllAsyncData();
    removeSecureItem('token');
    await persistor.purge();

    setIsAuth(false)
  }


  return (
    <View style={styles.wrapper}>
      <Text>SETTINGSSSS</Text>
      <Button style={{ backgroundColor: 'red' }} label="LOG OUT/ CLEAR ALL DATA" onPress={() => logOut()}></Button>
    </View>
  )
}

export default Settings;