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
}

const Button = ({ title, opacity = 0.6, icon, style: styleProp, ...rest }: Props) => {
    return (
        <TouchableOpacity activeOpacity={opacity} style={[styles.btnLogin, styleProp]} {...rest}>
            {icon ? icon : null}
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnLogin: {
        gap: 10,
        flexDirection: "row",
        // flex:0.1,
        alignSelf: 'center',
        backgroundColor: '#69AFF0',
        padding: 10,
        marginTop: 20,
        // width: moderateScale(250),
        paddingRight: 30,
        alignItems: 'center',
        marginBottom: verticalScale(20),
        borderWidth: 0,
        borderRadius: 25,
        borderColor: "transparent",
        color: "white"
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    },
})