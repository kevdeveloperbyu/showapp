import React from 'react'
import { View } from 'react-native'
import RecoverPwdScreen from './RecoverPwdScreen'

const RecoverPwdController = ({navigation}) => {
  return (
    <View>
        <RecoverPwdScreen navigation={navigation} />
    </View>
  )
}

export default RecoverPwdController