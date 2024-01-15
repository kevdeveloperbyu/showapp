import React from 'react'
import { SafeAreaView, View } from 'react-native'
import LoginScreen from './LoginScreen'

const LoginController = ({ navigation }) => {
  return (
    <SafeAreaView>
      <LoginScreen navigation={navigation} />
    </SafeAreaView>
  )
}

export default LoginController