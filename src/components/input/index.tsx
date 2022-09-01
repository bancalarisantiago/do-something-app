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
  secureEntry?: boolean;
  id?: number;
}


const Input: React.FC<Props> = ({ placeholder, autoComplete, iconName, iconColor, secureEntry, id }) => {
  return (
    <View style={styles.container} key={id}>
      {iconName && (
        <View style={styles.icon}>
          <Ionicons name={iconName} size={20} color={iconColor} />
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoComplete={autoComplete}
        secureTextEntry={secureEntry}
      />
    </View>
  )
}

export default Input
