import React from 'react'
import { View } from 'react-native'
import SignUpScreen from './SignUpScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUpController = ({navigation}) => {
  return (
    <SafeAreaView>
        <SignUpScreen navigation={navigation} />
    </SafeAreaView>
  )
}

export default SignUpController