import React from 'react'
import RecoverPwdScreen from './RecoverPwdScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const RecoverPwdController = ({navigation}) => {
  return (
    <SafeAreaView>
        <RecoverPwdScreen navigation={navigation} />
    </SafeAreaView>
  )
}

export default RecoverPwdController