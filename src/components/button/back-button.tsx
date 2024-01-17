import { StyleSheet, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';
import IonIcons from "react-native-vector-icons/Ionicons";

type Props = TouchableOpacityProps & {
    opacity?: number,
    icon?: React.ReactNode
    style?: StyleProp<ViewStyle>
}

const BackButton = ({ opacity = 0.6, icon, style, ...rest }: Props) => {
    return (
        <TouchableOpacity activeOpacity={opacity} style={[styles.btnLogin, style]} {...rest}>
            {icon ? icon :
                <IonIcons name='chevron-back-sharp' size={24} style={styles.icon} />
            }

        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    btnLogin: {
        // flexDirection: "row",
        position: "absolute",
        top: 20,
        left: 20,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: '#69AFF0',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
    },
    icon: {
        // backgroundColor: "red",
        color: "black"
    }
})