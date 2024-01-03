import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpController from '../../screens/stackNavigation/signup/SignUpController';
import LoginController from '../../screens/stackNavigation/login/LoginController';
import RecoverPwdController from '../../screens/stackNavigation/recoverpwd/RecoverPwdController';
import ResetPwdController from '../../screens/stackNavigation/resetpwd/ResetPwdController';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginController}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpController}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Recover Password"
        component={RecoverPwdController}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reset Password"
        component={ResetPwdController}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AuthStack;
