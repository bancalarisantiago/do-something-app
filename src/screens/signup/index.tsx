import { View, Text, Image, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react'
//Component
import Button from '../../components/button';
import Input from '../../components/input'
//Styles
import styles from './styles';
//Globals
import colors from '../../globals/colors';

type Form = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: string;
}


const SignUp: React.FC = () => {

  const [form, setForm] = useState<Form>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
  })

  function handleInputOnChange(value: string | number, name: string): void {

    setForm({ ...form, [name]: value })

  }

  function handleOnSubmit() {
    console.log(form)
  }

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
              {/* {inputsForm.map(input => <View key={input.id}><Input {...input} /></View>)} */}
              <Input
                placeholder="youremail@mail.com"
                iconName="person-circle-outline"
                autoComplete="email"
                iconColor={colors.blue}
                value={form.email}
                onChangeText={(value: string) => handleInputOnChange(value, "email")}
              />
              <Input
                placeholder="password"
                iconName="lock-closed-outline"
                autoComplete="password"
                iconColor={colors.blue}
                value={form.password}
                onChangeText={(value: string) => handleInputOnChange(value, "password")}
                secureEntry
              />
              <Input
                placeholder="First Name"
                iconName="person-circle-outline"
                autoComplete="name-given"
                iconColor={colors.blue}
                value={form.firstName}
                onChangeText={(value: string) => handleInputOnChange(value, "firstName")}
              />
              <Input
                placeholder="Last Name"
                iconName="person-circle-outline"
                autoComplete="name-family"
                iconColor={colors.blue}
                value={form.lastName}
                onChangeText={(value: string) => handleInputOnChange(value, "lastName")}
              />
              <Input
                placeholder="age"
                iconName="lock-closed-outline"
                iconColor={colors.blue}
                maxLength={3}
                value={form.age}
                onChangeText={(value: number) => handleInputOnChange(value, "age")}
              />
            </View>
            <View style={styles.divider}></View>
            <View style={styles.buttons}>
              <Button label="create account" style={styles.btnLogin} onPress={handleOnSubmit}></Button>
              {/* <Button label="sign up" style={styles.btnRegister} ></Button> */}
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default SignUp