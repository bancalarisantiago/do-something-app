import { useState, useEffect } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'
//Provider
import { useAuth } from '../../context/AuthProvider';

//Storage
import {
  removeAllAsyncData
} from '../../storage'
import { signUp, deleteAccount } from '../../redux/slices/userSlice';

//Components
import Button from '../../components/button';
import Input from '../../components/input';
import CustomModal from '../../components/modal';

//Globals
import colors from '../../globals/colors';

//Styles
import styles from './styles';


const SignUp: React.FC = () => {

  const { isAuth, setIsAuth } = useAuth();

  const navigation = useNavigation()
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state)

  console.log("state", user)
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    setError,
    reset, formState: { errors, isValid, isSubmitSuccessful }
  } = useForm({ mode: 'onChange' });


  useEffect(() => {

  }, [errors]);

  type User = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: string;
  }

  const handleCreateAccount = () => {
    setModalVisible(false)
    setIsAuth(true);
  }

  const onSubmit = async (data: any) => {
    //const validateUser = await getAsyncStorageItem('user')

    if (false) {
      console.log('usuario ya registarado')
      setError('email', { type: 'custom', message: 'Email already register' })
    } else {
      dispatch(signUp(data));
      setModalVisible(true)
    }
  };

  // const onError: SubmitErrorHandler<FormValues> = (errors, e) => {

  //   return console.log(errors)
  // }

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[colors.blue, colors.turquoise]}
      >
        <View style={styles.container}>
          <View >
            <Text style={styles.titleApp} >DO SOMETHING!</Text>
          </View>
          <View style={[styles.content, styles.shadow]}>
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
                    onChangeText={(value) => onChange(value)}
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
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    iconColor={colors.blue}
                    iconName="lock-closed-outline"
                    secureEntry
                  />
                )}
                name="password"
                rules={{ required: true }}
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="First Name"
                    autoComplete="name-given"
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    iconColor={colors.blue}
                    iconName="person-outline"
                  />
                )}
                name="firstName"
                rules={{ required: true }}
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Last Name"
                    autoComplete="name-family"
                    onBlur={onBlur}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                    iconColor={colors.blue}
                    iconName="person-outline"
                  />
                )}
                name="lastName"
                rules={{ required: true }}
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Age"
                    onBlur={onBlur}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                    keyboard="numeric"
                    maxLength={3}
                    iconColor={colors.blue}
                    iconName="man-outline"
                    iconSize={22}
                  />
                )}
                name="age"
                rules={{ required: true }}
              />
            </View>
            <View style={styles.divider}></View>
            <View style={styles.buttons}>
              <Button
                //style={styles.buttonInner}
                label="Reset"
                onPress={() => {
                  reset();
                  removeAllAsyncData();
                  // removeStoreData("bancalarisantiago@gmail.com");
                }}
              />
              <View >
                <Button
                  style={styles.btnLogin}
                  label="create account"
                  onPress={handleSubmit(onSubmit)}
                  disabled={!isValid}
                />
              </View>
              <CustomModal
                name="singup"
                label="INFO"
                btnLabel="Go Home"
                modalVisible={modalVisible}
                callback={handleCreateAccount}
                setModalVisible={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignUp;
