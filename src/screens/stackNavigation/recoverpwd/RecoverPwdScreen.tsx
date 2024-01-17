import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  View,
  Alert,
} from 'react-native';
import { moderateScale, verticalScale } from '../../../utils/scaleMetrics';
import { authServices } from '../../../services';
import BackButton from '@/components/button/back-button';
import FormInput from '@/components/form/form-input';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { RecoverPwdSchema, TRecoverPwdSchema } from '@/types/schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import FormButton from '@/components/form/form-button';
import HomeLinear from '@/screens/linearGradients/home-linear';

const RecoverPwdScreen = ({ navigation }) => {

  const form = useForm<TRecoverPwdSchema>({
    resolver: zodResolver(RecoverPwdSchema),
    defaultValues: {
      email: ""
    },
    // mode: 'onBlur',
  })
  const { errors } = form.formState

  const onSubmit: SubmitHandler<TRecoverPwdSchema> = (data: TRecoverPwdSchema) => {
    console.log("everything good", JSON.stringify(data));
    Keyboard.dismiss();
    form.reset();
    // authServices.forgotPassword(data.email);
    Alert.alert(
      'We have send an email with a link to reset your password!',
    );
    navigation.navigate('Login');
  };

  return (
    <HomeLinear>

      <SafeAreaView style={styles.loginBlock}>

        {navigation.canGoBack() &&
          <BackButton onPress={() => navigation.goBack()} />
        }

        <View style={styles.contentImg}>
          <Image
            source={require('src/assets/images/whitelogo.png')}
            style={styles.img}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.header}>Recuperar Contrasena</Text>
          <Text style={styles.text}>Proporcione el correo electrónico de su cuenta para la cual desea restablecer su contraseña</Text>
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
                    onBlur={onBlur}
                    style={{ borderColor: "black", borderWidth: 1, borderRadius: 10, color: "black" }}
                    placeholderTextColor="#A9A9A9"  // Agrega esto para establecer el color del marcador de posición
                    onChangeText={onChange}
                    value={value}
                    error={errors.email?.message}
                  />
                )}
              />

              <FormButton title='Restablecer contraseña' onPress={form.handleSubmit(onSubmit)}
                style={[styles.buttonReset, { borderRadius: 10 }]}
              />

            </FormProvider>
            <FormButton title='Cancelar' onPress={() => navigation.canGoBack() ? navigation.goBack() : {}}
              style={styles.buttonCancel} textStyle={styles.buttonCancelText}
            />
          </View>


        </View>
      </SafeAreaView>
    </HomeLinear>

  );
};

export default RecoverPwdScreen;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  buttonReset: {
    backgroundColor: "#751D1C"
  },
  buttonCancelText: {
    color: "black"
  },
  buttonCancel: {
    backgroundColor: "transparent",
    color: "black",
    // borderWidth: 1,
    // borderColor: "black"
  },
  form: {
    alignItems: 'center',
    gap: 20
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  loginBlock: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // backgroundColor: '#6C141B',
  },
  contentImg: {
    flex: 0.5,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  content: {
    flex: 0.5,
    // height: "50%",
    backgroundColor: "white",
    paddingHorizontal: 50,
    paddingVertical: 40,
    gap: 20,
    width: "100%",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },

  img: {
    width: 260,
    objectFit: "cover",
    height: 190,
    marginTop: 0,
    marginBottom: 50,
  },
});
