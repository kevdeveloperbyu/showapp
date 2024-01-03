import { View } from 'native-base'
import React from 'react'
import PhysicalEventScreen from './PhysicalEventScreen'
interface Props extends DrawerScreenProps<any, any>{};

function PhysicalEventController({navigation, route}: Props) {
  return (
    <View>
        <PhysicalEventScreen navigation={navigation} route={route} />
    </View>
  )
}

export default PhysicalEventController;