import React from 'react'
import { View } from 'react-native'
import SignUpScreen from './SignUpScreen'

const SignUpController = ({navigation}) => {
  return (
    <View>
        <SignUpScreen navigation={navigation} />
    </View>
  )
}

export default SignUpController