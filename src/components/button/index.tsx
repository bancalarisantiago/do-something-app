//Lib
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
//Types
import { ButtonType } from '../../types'
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


const Button: React.FC<ButtonType> = ({
  children,
  label,
  onPress,
  loading,
  style,
  disabled }) => {
  return (
    <TouchableOpacity
      style={disabled ? [styles.wrapper, style, styles.btnDisabled] : [styles.wrapper, style]}
      onPress={onPress}
      activeOpacity={loading ? 1 : 0.5}
      disabled={disabled ?? false}
    >
      <Text style={styles.label}>{label}</Text>
      {children && (
        <View>{children}</View>
      )}
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="small"
          color={colors.blue}
        />
      )}
    </TouchableOpacity>
  )
}

export default Button

