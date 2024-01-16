import { Pressable, StyleSheet, Text, TextInputProps, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { moderateScale, verticalScale } from '@/utils/scaleMetrics'
import { Image } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

type Props = TextInputProps & {
    left?: React.ReactNode
    right?: React.ReactNode
    rightOnPress?: () => void
}

const FormInput = ({ left, right, rightOnPress = () => { }, ...rest }: Props) => {
    const hasLeft = left ? true : null
    const hasRight = right ? true : null
    const hasLeftRight = hasLeft || hasRight ? true : false
    return (
        <View style={hasLeftRight ? styles.view : null}>
            {hasLeft && left}

            <TextInput
                style={hasLeft ? styles.withIconLeftInput : hasRight ? styles.normalInput : styles.input}
                {...rest}
            />

            {hasRight &&
                <Pressable style={styles.right} onPress={rightOnPress}>
                    {hasRight && right}
                </Pressable>
            }
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        alignItems: "center",
        height: verticalScale(40),
        paddingLeft: 20,
        width: moderateScale(250),
        backgroundColor: 'white',
        borderRadius: 25,
    },
    right: {
        position: "absolute",
        right: 20
    },
    withIconLeftInput: {
        marginLeft: 6,
        width: "100%"
    },
    normalInput: {
        width: "100%"
    },
    input: {
        height: verticalScale(40),
        margin: 6,
        // borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        width: moderateScale(250),
        backgroundColor: 'white',
        borderRadius: 25,
    },

})