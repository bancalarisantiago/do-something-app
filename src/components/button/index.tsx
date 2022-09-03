import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


type Props = {
  label?: string;
  style?: any;
  onPress: any;
  loading?: boolean;
  children?: any;
}


const Button: React.FC<Props> = ({ children, label, onPress, loading, style }) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, style]}
      onPress={onPress}
      activeOpacity={loading ? 1 : 0.5}
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
