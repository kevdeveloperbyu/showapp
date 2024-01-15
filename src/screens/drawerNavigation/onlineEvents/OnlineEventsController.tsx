import React from 'react'
import { Text, View } from 'react-native'
import OnlineEventsScreen from './OnlineEventsScreen';
interface Props extends DrawerScreenProps<any, any>{};


const OnlineEventsController = ({navigation, route}: Props) => {
  return (
    <View>
        <OnlineEventsScreen navigation={navigation} route={route} />
    </View>
  )
}

export default OnlineEventsController;