import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  View,
} from 'react-native';
import {moderateScale, verticalScale} from '../../../utils/scaleMetrics';
import {Formik, validateYupSchema} from 'formik';
import {authServices} from '../../../services/auth.services';

const ResetPwdScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.loginBlock}>
      <Image
        source={require('../../../assets/images/whitelogo.png')}
        style={styles.img}
      />
      <Text style={styles.loginText}>Password Resety</Text>
      <Text
        style={{
          color: 'white',
          width: '60%',
          textAlign: 'center',
          marginBottom: 10,
        }}>
        Write your password in order to send you a link yo reset your password
      </Text>
      <Formik
        initialValues={{password: '', code: ''}}
        onSubmit={values => {
          console.log(values);
          authServices.resetPassword(values.code, values.password);
          navigation.navigate('Reset Password');
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              placeholder="Write your received code"
              placeholderTextColor={'black'}
              style={styles.input}
              value={values.code}
              onChangeText={handleChange('code')}
              onBlur={handleBlur('code')}
            />
            <TextInput
              placeholder="Write your new password"
              placeholderTextColor={'black'}
              style={styles.input}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              textContentType="password"
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
              <Text style={styles.btnText}>Send email</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Go to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPwdScreen;

const styles = StyleSheet.create({
  loginBlock: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#6C141B',
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
