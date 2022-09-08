import { View, TextInput, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
//Types
import { InputTextType } from '../../types';

//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';




const Input: React.FC<InputTextType> = ({
  placeholder,
  autoComplete,
  iconName,
  iconColor,
  iconSize,
  secureEntry,
  onChangeText,
  value,
  errorMessage,
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
      {errorMessage ? (
        <>
          <View style={styles.errorMsgBox}>
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
          <View style={styles.errorIcon}>
            <Ionicons name="close-outline" size={18} color={'red'} />
          </View>
        </>
      ) : (
        <View style={styles.errorIcon}>
          <Ionicons name="checkmark-outline" size={18} color={colors.blue} />
        </View>
      )}
    </View>
  )
}

export default Input
