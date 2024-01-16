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
    <LoginLinear>
      <SafeAreaView
        style={styles.container}
      >
        <Image
          source={require('../../../assets/images/whitelogo.png')}
          style={styles.img}
        />
        <Text style={styles.loginText}>Ingreso</Text>
        <View style={styles.formContainer}>
          <FormProvider {...form}>

            <Controller
              name="email"
              control={form.control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  placeholder="Email"
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
                // <TextInput
                //   placeholder="Password"
                //   style={styles.input}
                //   onBlur={onBlur}
                //   onChangeText={onChange}
                //   value={value}
                // />
                <FormInput
                  right={<AntDesign name={"eye"} size={24} style={{
                    position: "relative",

                  }} />}
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.password && <Text>{errors.password?.message}</Text>}

            <FormButton title='Ingresar' onPress={form.handleSubmit(onSubmit)} />

          </FormProvider>
        </View>

        <SvgWave />
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
    gap: 20,
    height: '100%',
    width: '100%',
    // backgroundColor: '#6C141B',
  },
  formContainer: {
    alignItems: 'center',
    // alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10,
    // backgroundColor: '#6C141B',
  },

  btnSignUp: {},
  img: {
    width: 120,
    height: 90,
    // marginBottom: 50,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    // marginBottom: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});
