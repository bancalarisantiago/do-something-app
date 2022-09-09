import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppDispatch } from '../../hooks/useReduxHooks';
//Provider
import { useAuth } from '../../context/AuthProvider';

//Actions
import { logIn } from '../../redux/slices/userSlice';

//Component
import Button from '../../components/button';
import Input from '../../components/input'
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';

//Assets
import { store } from '../../redux/store';

const LogIn: React.FC = () => {

  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  //const { isAuth, setIsAuth } = useAuth();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    setError,
    reset, formState: { errors, isValid, isSubmitSuccessful }
  } = useForm({ mode: 'onChange' });



  const errorsInput = {
    email: errors?.email?.message ? errors.email.message : '',
    password: errors?.password?.message ? errors.password.message : '',

  }
  const onSubmit = async (dataUser) => {

    const { user: { user } } = store.getState()
    // Last validation before log in.
    //In a real case app I should check the email and password received in our DB .
    //In this case i am checking on the user saved in the AsyncStore.

    if (user) {
      if (user.password === dataUser.password && user.email === dataUser.email) {
        if (logIn()) {
          // setIsAuth(true);
        }
      } else {
        setError('password', { type: 'custom', message: 'Invalid password' });
      }
    }
  };


  return (
    <SafeAreaView >
      <LinearGradient
        colors={[colors.blue, colors.turquoise]}
      >
        <View style={styles.container}>
          <View style={styles.wrapperContent}>
            <Image
              style={styles.iconLogin}
              source={require('../../../assets/icon.png')}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>DO-SOMETHING</Text>
              <Text style={styles.subtitle}>and have fun!</Text>
            </View>
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
                    //errorMessage={errorsInput?.password?.length > 0 ? errorsInput.password : null}
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
    </SafeAreaView >

  )
}

export default LogIn