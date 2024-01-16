import { StyleSheet, Text, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { moderateScale, verticalScale } from '@/utils/scaleMetrics'

type Props = TouchableOpacityProps & {
    title: string,
    opacity?: number
}

const FormButton = ({ title, onPress, opacity = 0.6, ...rest }: Props) => {
    return (
        <TouchableOpacity activeOpacity={opacity} style={styles.btnLogin}  {...rest}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    btnLogin: {
        alignSelf: 'center',
        backgroundColor: '#2E364C',
        padding: 10,
        marginTop: 20,
        width: moderateScale(250),
        alignItems: 'center',
        marginBottom: verticalScale(20),
        borderWidth: 0,
        borderRadius: 25,
        borderColor: "transparent",
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    },
})