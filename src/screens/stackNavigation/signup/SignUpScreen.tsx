import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Alert,
  Keyboard,
} from 'react-native';
import { moderateScale, verticalScale } from '../../../utils/scaleMetrics';
import Analytics from 'appcenter-analytics';
import { authServices } from '../../../services/auth.services';
import LoginLinear from '@/screens/linearGradients/login-linear';
import { useForm, Controller, SubmitHandler, FormProvider, SubmitErrorHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TSignUpSchema } from '@/types/schemas/auth-schema';
import SvgWave from '@/components/svg/wave-login';
import FormButton from '@/components/form/form-button';
import FormInput from '@/components/form/form-input';
import AntDesign from "react-native-vector-icons/AntDesign"
import Button from '@/components/form/button';
import GoogleSvg from '@/components/svg/google-svg';
import { AppleLogo, GoogleLogo } from '@/assets/icons';
import BackButton from '@/components/button/back-button';

const SignUpScreen = ({ navigation }) => {
  console.log("signup can", navigation.canGoBack())

  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      age: ""
    },
    mode: 'onBlur',
  })
  const { errors } = form.formState

  const onSubmit: SubmitHandler<TSignUpSchema> = (data: TSignUpSchema) => {
    console.log("everything good", JSON.stringify(data));
    Keyboard.dismiss();
    form.reset()
    // authServices.createUserWithFirebase(data.email, data.password);
  };

  return (
    <LoginLinear style={styles.container}>

      {navigation.canGoBack() &&
        <BackButton onPress={() => navigation.goBack()} />
      }

      <View style={styles.content}>

        <Image
          source={require('src/assets/images/whitelogo.png')}
          style={styles.img}
        />

        <Text style={styles.header}>Registro</Text>

        <View style={styles.form}>
          <FormProvider {...form}>

            <Controller
              name="fullName"
              control={form.control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  placeholder="Nombres completos"
                  placeholderTextColor="#A9A9A9"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.fullName?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={form.control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  placeholder="Correo electronico"
                  placeholderTextColor="#A9A9A9"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={form.control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  password
                  placeholder="Contrasena"
                  placeholderTextColor="#A9A9A9"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                />
              )}
            />

            <Controller
              name="age"
              control={form.control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  placeholder="Edad"
                  placeholderTextColor="#A9A9A9"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                  keyboardType='number-pad'
                />
              )}
            />

            <FormButton title='Registrarse' onPress={form.handleSubmit(onSubmit)}
              style={styles.buttonSignUp}
            />

          </FormProvider>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={[styles.textForget, {
              position: "absolute", bottom: -10,
              alignSelf: "center",
            }]}
          >Ya tengo una cuenta</Text>
        </TouchableOpacity>

      </View>

      <SvgWave />

      <View style={styles.footer}>

        <Text style={styles.textBlack}>O</Text>

        <View style={styles.toogleButtons}>

          <Button title='Continuar con Google' icon={<GoogleLogo width={SIZE_ICON} height={SIZE_ICON} />} onPress={() => console.log("google")} style={styles.googleButton} textStyle={styles.darkText} />

          <Button title='Continuar con Apple' icon={<AppleLogo width={SIZE_ICON} height={SIZE_ICON} />} onPress={() => console.log("apple")} style={styles.appleButton} textStyle={styles.darkText} />
        </View>

      </View>

    </LoginLinear >
  );
};

export default SignUpScreen;

const SIZE_ICON = 24
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    flex: 1
    // backgroundColor: '#6C141B',
  },
  content: {
    gap: 20,
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  form: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 35,
  },
  img: {
    width: 120,
    height: 90,
  },
  footer: {
    backgroundColor: "white",
    width: "100%",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textForget: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  textBlack: {
    color: "black",
    position: "absolute",
    top: -30,
    alignSelf: "center",
    fontSize: 15,
  },
  textLink: {
    color: '#305FD9',
    fontSize: 15,
    fontWeight: "bold",
    // textDecorationLine: 'underline'
  },
  toogleButtons: {
    flexDirection: "column",
    gap: 10
  },
  buttonSignUp: {
    backgroundColor: "#9467C1",
    marginVertical: 10
  },
  googleButton: {
    // backgroundColor: '#69AFF0',
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    paddingLeft: 20,
    alignSelf: "center",
    height: verticalScale(40),
    width: moderateScale(250),
  },
  appleButton: {
    // backgroundColor: "#305FD9",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    paddingLeft: 20,
    paddingRight: 40,
    alignSelf: "center",
    height: verticalScale(40),
    width: moderateScale(250),
  },
  darkText: {
    color: "#000"
  }
});
