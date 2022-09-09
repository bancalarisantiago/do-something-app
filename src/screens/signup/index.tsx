import { useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'

//Types
import { UserType } from '../../types';

//Provider
import { useAuth } from '../../context/AuthProvider';

//Storage
import { removeAllAsyncData } from '../../storage'
import { signUp } from '../../redux/slices/userSlice';
import { getRandomActivity } from '../../redux/slices/activitySlice';

//Components
import Button from '../../components/button';
import Input from '../../components/input';
import CustomModal from '../../components/modal';

//Globals
import colors from '../../globals/colors';

//Styles
import styles from './styles';

//Assets
import { store } from '../../redux/store';

const SignUp: React.FC = () => {

  const { isAuth, setIsAuth } = useAuth();

  const navigation = useNavigation()
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state)

  const [modalVisible, setModalVisible] = useState<boolean>(false);


  const {
    register,
    setValue,
    handleSubmit,
    control,
    setError,
    reset, formState: { errors, isValid, isSubmitSuccessful }
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange' });

  // useEffect(() => {
  // }, [errors]);


  //All validation rules al missing, the only validation is to check that the email is not registered.
  const errorsInput = {
    email: errors?.email?.message ? errors.email.message : '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
  }


  const handleCreateAccount = () => {
    setModalVisible(false)
    setIsAuth(true);
  }
  const onSubmit = async (dataUser: UserType) => {
    const { user: { user } } = store.getState()
    if (user) {
      //Last validation before creating an account.
      //In a real case app I should check the email received in our DB and find if the email is already taken.
      //The idea is to create a function verify if the user email is already register in our DB.
      //We should compare the email received and look it our the DB.
      //Of course in a real project we should check it in a DB.
      //In this case i am checking on the user saved in the AsyncStore.
      if (user.email === dataUser.email) {
        // return console.log("USUARIO YA REGISTRADO")
        setError('email', { type: 'custom', message: 'Email is already registered' });
      } else {
        dispatch(getRandomActivity())
        dispatch(signUp(dataUser));
        setModalVisible(true);
      }
    }
  }
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
                    errorMessage={errorsInput?.email?.length > 0 ? errorsInput.email : null}
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
                label="Thanks for joining us!"
                btnLabel="Go Home"
                modalVisible={modalVisible}
                callback={handleCreateAccount}
                setModalVisible={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;
