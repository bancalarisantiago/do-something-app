import { View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


type Props = {
  id?: number;
  placeholder: string;
  iconName?: any;
  iconColor?: string;
  autoComplete?: any;
  secureEntry?: boolean;
  value: any;
  maxLength?: number;
  onChangeText?: any;
}


const Input: React.FC<Props> = ({ placeholder, autoComplete, iconName, iconColor, secureEntry, id, onChangeText, value, maxLength }) => {
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
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={placeholder === 'age' ? 'numeric' : 'default'}
      />
    </View>
  )
}

export default Input
