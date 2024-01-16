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
import Loader from '@/components/svg/svg-notation';
import ScreenWrapper from '@/components/screen-wrapper';
import { ZodError } from 'zod';
import { useForm, Controller, SubmitHandler, FormProvider, SubmitErrorHandler } from "react-hook-form"
import { getReadableValidationErrorMessage } from './getReadableErrors';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, TLoginSchema } from '@/types/schemas/auth-schema';

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
    <LoginLinear>
      <SafeAreaView
        style={styles.container}
      >
        <Image
          source={require('../../../assets/images/whitelogo.png')}
          style={styles.img}
        />
        <Text style={styles.loginText}>Login</Text>
        <FormProvider {...form}>

          <Controller
            name="email"
            control={form.control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Email"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && <Text>{errors.email?.message}</Text>}

          <Controller
            name="password"
            control={form.control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && <Text>{errors.password?.message}</Text>}

          {/* <Button title="Submit" onPress={form.handleSubmit(onSubmit)} /> */}
          <TouchableOpacity style={styles.btnLogin}
            // onPress={onSubmit}
            onPress={form.handleSubmit(onSubmit)}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

        </FormProvider>



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
        <Loader />
      </SafeAreaView>
    </LoginLinear >
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10,
    height: '100%',
    width: '100%',
    // backgroundColor: '#6C141B',
  },
  btnLogin: {
    alignSelf: 'center',
    backgroundColor: '#2E364C',
    padding: 10,
    width: moderateScale(140),
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: verticalScale(20),
  },
  btnSignUp: {},
  img: {
    width: 120,
    height: 90,
    marginTop: 0,
    marginBottom: 50,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginBottom: 50,
  },
  signUpText: {},
  input: {
    height: verticalScale(35),
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: moderateScale(250),
    backgroundColor: 'white',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});
