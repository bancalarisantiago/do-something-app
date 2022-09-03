import { View, Text, Image, TextInput } from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';

//Component
import Button from '../../components/button';
import Input from '../../components/input'
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


const Login: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[colors.blue, colors.turquoise]}
      >

        <View style={styles.container}>
          <View >
            <Text style={styles.titleApp} >DO SOMETHING!</Text>
          </View>
          <View style={styles.content}>
            <Image
              style={styles.iconLogin}
              source={require('../../../assets/icon.png')}
            />
            <Text style={styles.title}>Sign In to your account</Text>
            <View style={styles.inputs}>
              <Input
                iconName="mail-outline"
                placeholder="youremail@mail.com"
                autoComplete="email"
                iconColor={colors.blue}
              />
              <Input
                iconName="lock-closed-outline"
                placeholder="password"
                autoComplete="password"
                iconColor={colors.blue}
                secureEntry
              />
            </View>
            <View style={styles.divider}></View>
            <View style={styles.buttons}>
              <Button label="login" style={styles.btnLogin} ></Button>
              <Button label="sign up" style={styles.btnRegister} ></Button>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default Login