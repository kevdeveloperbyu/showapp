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
import ScreenWrapper from '@/components/screen-wrapper';
import { ZodError } from 'zod';
import { useForm, Controller, SubmitHandler, FormProvider, SubmitErrorHandler } from "react-hook-form"
import { getReadableValidationErrorMessage } from './getReadableErrors';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, TLoginSchema } from '@/types/schemas/auth-schema';
import SvgWave from '@/components/svg/wave-login';
import FormButton from '@/components/form/form-button';
import FormInput from '@/components/form/form-input';
import AntDesign from "react-native-vector-icons/AntDesign"
import Button from '@/components/form/button';
import GoogleSvg from '@/components/svg/google-svg';
import { AppleLogo, GoogleLogo } from '@/assets/icons';
import { colors, sizes } from '@/constants/theme';

const LoginScreen = ({ navigation }) => {
  console.log("login can", navigation.canGoBack())

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    // mode: 'onBlur',
  })
  const { errors } = form.formState

  const onSubmit: SubmitHandler<TLoginSchema> = (data: TLoginSchema) => {
    authServices.loginWithFirebase(data.email, data.password);
    Keyboard.dismiss();
    form.reset();
  };

  return (
    <LoginLinear style={styles.container}>
      <View style={styles.content}>

        <Image
          source={require('src/assets/images/whitelogo.png')}
          style={styles.img}
        />

        <Text style={styles.header}>Ingreso</Text>

        <View style={styles.form}>
          <FormProvider {...form}>

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

            <FormButton title='Ingresar' onPress={form.handleSubmit(onSubmit)}
              style={styles.buttonLogin}
            />

          </FormProvider>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Recover Password')}>
          <Text
            style={[styles.textForget, {
              position: "absolute", bottom: -10,
              alignSelf: "center",
            }]}
          >Olvidaste tu Contrasena?</Text>
        </TouchableOpacity>

      </View>

      <SvgWave />

      <View style={styles.footer}>

        <Text style={styles.textBlack}>o Conectate con</Text>

        <View style={styles.toogleButtons}>

          <Button title='Google' icon={<GoogleLogo width={SIZE_ICON} height={SIZE_ICON} />} onPress={() => console.log("google")} style={styles.googleButton} />

          <Button title='Apple' icon={<AppleLogo width={SIZE_ICON} height={SIZE_ICON} />} onPress={() => console.log("apple")} style={styles.appleButton} />
        </View>

        <View style={{ gap: 10, flexDirection: "row" }}>
          <Text style={styles.textBlack}>No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sign Up');
              Analytics.trackEvent('open_signUp');
            }}>
            <Text style={styles.textLink}>Registrarme</Text>
          </TouchableOpacity>
        </View>

      </View>

    </LoginLinear >
  );
};

export default LoginScreen;

const SIZE_ICON = 24
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: sizes.height,
    width: sizes.width,
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
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.white,
    width: "100%",
    flex: 0.4,
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
    fontSize: 15,
  },
  textLink: {
    color: '#305FD9',
    fontSize: 15,
    fontWeight: "bold",
    // textDecorationLine: 'underline'
  },
  toogleButtons: {
    flexDirection: "row",
    gap: 20
  },
  buttonLogin: {
    backgroundColor: "#9467C1",
    marginVertical: 10
  },
  googleButton: {
    backgroundColor: '#69AFF0',
    paddingLeft: 20,
    paddingRight: 40,
    width: "35%",
    marginTop: 20,
    marginBottom: verticalScale(20)
  },
  appleButton: {
    backgroundColor: "#305FD9",
    paddingLeft: 20,
    paddingRight: 40,
    width: "35%",
    marginTop: 20,
    marginBottom: verticalScale(20)
  },
});
