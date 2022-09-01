import { View, Text , Image, TextInput } from 'react-native';
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
                // Background Linear Gradient
                colors={[colors.blue, colors.turquoise]}
              >
                    <View>
                      <Text>DO SOMETHING!</Text>
                    </View>
                <View style={styles.container}>
                  <View style={styles.content}>
                    <Image
                      style={styles.iconLogin}
                      source={require('../../../assets/icon.png')}
                    />
                  <Text style={styles.title}>Sign In to your account</Text>
                  {/* <TextInput 
                    inlineImageLeft='search_icon'
                    autoComplete="email"
                    placeholder='youremail@email.com'
                  />
                  <TextInput 
                    autoComplete="password"
                    placeholder='password'
                  /> */}
                  <Input 
                    iconName="person-circle-outline" 
                    placeholder="youremail@mail.com"
                    autoComplete="email"
                  />
                  <Input
                    iconName="lock-closed-outline"
                    placeholder="password"
                    autoComplete="password"
                  />
                  <View style={styles.divider}></View>
                  <Button label="login" style={styles.btnLogin} ></Button>
                  <Button label="register" style={styles.btnRegister} ></Button>
                  </View>
                </View>
            </LinearGradient>
        </View>
  )
}

export default Login