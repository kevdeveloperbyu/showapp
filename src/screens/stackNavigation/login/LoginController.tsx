import React from 'react'
import { View } from 'react-native'
import LoginScreen from './LoginScreen'

const LoginController = ({navigation}) => {
  return (
    <View>
        <LoginScreen navigation={navigation} />
    </View>
  )
}

export default LoginController