import { View, Text } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather"
type Props = {
    name: string
    onPress?: () => void
}

const Icon = ({ name, onPress = () => { }, ...rest }: Props) => {
    return (
        <FeatherIcon name={name} onPress={onPress}{...rest} />
    )
}

export default Icon