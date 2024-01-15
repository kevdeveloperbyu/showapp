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
import {authServices} from '../../../services';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.loginBlock}>
      <Image
        source={require('../../../assets/images/whitelogo.png')}
        style={styles.img}
      />
      <Text style={styles.loginText}>Sign Up</Text>
      <Formik
        initialValues={{email: '', password: '', age: '', name: ''}}
        onSubmit={values => {
          console.log(values);
          authServices.createUserWithFirebase(values.email, values.password);
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              placeholder="Write your full name"
              placeholderTextColor={'black'}
              style={styles.input}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            <TextInput
              placeholder="Write your email"
              placeholderTextColor={'black'}
              style={styles.input}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <TextInput
              placeholder="Write your password"
              placeholderTextColor={'black'}
              style={styles.input}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              textContentType="password"
              secureTextEntry={true}
            />
            <TextInput
              placeholder="Write your age"
              placeholderTextColor={'black'}
              style={styles.input}
              value={values.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              keyboardType="number-pad"
            />
            <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
