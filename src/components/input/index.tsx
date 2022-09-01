import { View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


type Props = {
  placeholder?: string;
  iconName?: any;
  iconColor?: string;
  autoComplete?: any;
}


const Input: React.FC<Props> = ({ placeholder, autoComplete, iconName, iconColor }) => {
  return (
        <View style={styles.container}>
            <View style={styles.icon}>
              <Ionicons  name={iconName} size={20} color={iconColor} />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                autoComplete={autoComplete}
                underlineColorAndroid="transparent"
            />
       </View>
  )
}

export default Input
