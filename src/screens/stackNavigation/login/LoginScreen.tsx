import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  View,
  Button,
  Alert,
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

const LoginScreen = ({ navigation }) => {

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    // mode: 'onBlur',
  })
  const { errors } = form.formState

  // const onSubmit: SubmitHandler<TLoginSchema> = (data) => {
  //   console.log(JSON.stringify(data));
  // };
  const onSubmit: SubmitHandler<TLoginSchema> = (data: TLoginSchema) => {
    console.log("everything good", JSON.stringify(data));
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
                  placeholder="Correo Electronico"
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
                  right={<AntDesign name={"eye"} size={24} />}
                  password
                  placeholder="Contrasena"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                />

              )}
            />

            <FormButton title='Ingresar' onPress={form.handleSubmit(onSubmit)} />

          </FormProvider>
        </View>
      </View>

      {/* Wave  */}
      <SvgWave />

      <View style={styles.footer}>
        <FormButton title='Recuperar contrasena'/>
        <TouchableOpacity
          style={{ marginBottom: 10 }}
          onPress={() => navigation.navigate('Recover Password')}>
          <Text style={styles.btnText}>I forget my password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sign Up');
            Analytics.trackEvent('open_signUp');
          }}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </LoginLinear >
  );
};

export default LoginScreen;

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
    gap: 30,
    // backgroundColor: '#6C141B',
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
    height: "25%",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: 'black',
    fontSize: 18,
  },
});
