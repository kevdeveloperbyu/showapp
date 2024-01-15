import React from 'react'
import { SafeAreaView } from 'react-native'
import MyInvoicesScreen from './MyInvoicesScreen';
interface Props extends DrawerScreenProps<any, any>{};


const MyInvoicesController = ({navigation, route}: Props) => {
  return (
    <SafeAreaView>
        <MyInvoicesScreen navigation={navigation} route={route} />
    </SafeAreaView>
  )
}

export default MyInvoicesController;