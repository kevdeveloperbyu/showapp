import { StyleSheet, Text, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { moderateScale, verticalScale } from '@/utils/scaleMetrics'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleProps } from 'react-native-reanimated';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string,
    opacity?: number,
    icon?: React.ReactNode
    style?: StyleProp<ViewStyle>
    textStyle?: Record<string, string>
}

const Button = ({ title, opacity = 0.6, icon, style, textStyle, ...rest }: Props) => {
    return (
        <TouchableOpacity activeOpacity={opacity} style={[styles.btnLogin, style]} {...rest}>
            {icon ? icon : null}
            {/* <Text style={styles.btnText}>{title}</Text> */}
            <Text style={[styles.btnText, textStyle]}>{title}</Text>

        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnLogin: {
        gap: 10,
        flexDirection: "row",
        alignSelf: 'center',
        backgroundColor: '#69AFF0',
        padding: 10,
        borderRadius: 25,
        color: "white"
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    },
})