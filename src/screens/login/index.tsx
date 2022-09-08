import { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';

//Component
import Button from '../../components/button';
import Input from '../../components/input'
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';


const LogIn: React.FC = () => {

  const navigation = useNavigation();
  const {
    register,
    setValue,
    handleSubmit,
    control,
    setError,
    reset, formState: { errors, isValid, isSubmitSuccessful }
  } = useForm({ mode: 'onChange' });

  const onSubmit = async data => {

    console.log(data)
  };

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
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="youremail@mail.com"
                    autoComplete="email"
                    onBlur={onBlur}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                    iconColor={colors.blue}
                    iconName="mail-outline"
                  />
                )}
                name="email"
                rules={{ required: true }}
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="password"
                    autoComplete="password"
                    onBlur={onBlur}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                    iconColor={colors.blue}
                    iconName="lock-closed-outline"
                    secureEntry
                  />
                )}
                name="password"
                rules={{ required: true }}
              />
            </View>
            <View style={styles.divider}></View>
            <View style={styles.buttons}>
              <Button label="login" style={styles.btnLogin} onPress={handleSubmit(onSubmit)}></Button>
              <Button label="sign up" style={styles.btnRegister} onPress={() => navigation.navigate('SignUp')}></Button>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default LogIn