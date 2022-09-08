import { View, TextInput, TextInputProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


type Props = {
  placeholder: string;
  iconName: string | any;
  iconColor: string;
  iconSize?: number;
  autoComplete?: any;
  secureEntry?: boolean;
  value: string;
  maxLength?: number;
  onChangeText: (str: string) => any;
  onBlur?: any;
  style?: any;
  keyboard?: Readonly<TextInputProps> | string;
}

const Input: React.FC<Props> = ({
  placeholder,
  autoComplete,
  iconName,
  iconColor,
  iconSize,
  secureEntry,
  onChangeText,
  value,
  maxLength,
  keyboard }) => {
  return (
    <View style={styles.container} >
      {iconName && (
        <View style={styles.icon}>
          <Ionicons name={iconName} size={iconSize ?? 20} color={iconColor} />
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
        keyboardType={keyboard ?? 'default'}
      />
    </View>
  )
}

export default Input
