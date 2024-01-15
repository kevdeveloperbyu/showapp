import React from 'react'
import { View } from 'react-native'
import DetailPhysicalEventScreen from './DetailPhysicalEventScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any>{};

const DetailPhysicalEventController = ({navigation, route}:Props) => {
    const event ={}
  return (
    <View>
        <DetailPhysicalEventScreen event={event} route={route} navigation={navigation} />
    </View>
  )
}

export default DetailPhysicalEventController;