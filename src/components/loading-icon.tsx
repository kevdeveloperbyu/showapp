import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { APPBAR_SIZE_ICON } from './app-bar';

type LoadingIconProps = {
    loading: boolean,
    color: string,
    size: number
}

const LoadingIcon = ({ loading, color, size }: LoadingIconProps) =>
    loading ?
        <ActivityIndicator animating={loading} color={MD2Colors.red800} size={size} /> :
        <MaterialCommunityIcons name='information-outline' size={APPBAR_SIZE_ICON} color={color} />

export default LoadingIcon