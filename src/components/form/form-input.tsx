import React from 'react';
import {
    Pressable,
    StyleSheet,
    TextInputProps,
    View,
    TextInput,
    Text,
    ViewStyle,
    StyleProp
} from 'react-native'
import { moderateScale, verticalScale } from '@/utils/scaleMetrics'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';


type Props = TextInputProps & {
    style?: StyleProp<ViewStyle>
    left?: React.ReactNode
    right?: React.ReactNode
    rightOnPress?: () => void
    error?: string
    password?: boolean
}

const FormInput = ({
    style, left, right, rightOnPress = () => { }, error, password, ...rest }: Props) => {
    const [hidePassword, setHidePassword] = React.useState<boolean>()
    const hasLeft = left ? true : null
    const hasRight = right ? true : null
    const hasLeftRight = hasLeft || hasRight || password ? true : false

    return (
        <View style={styles.container}>
            <View
                style={hasLeftRight ? styles.inputContainer : null}
            // style={ styles.inputContainer }
            >
                {hasLeft && left}

                <TextInput
                    style={[hasLeft ? styles.withIconLeftInput : hasRight || password ? styles.withIconRightInput : styles.input, style]}
                    {...rest}
                    secureTextEntry={hidePassword}
                />

                {hasRight && !password &&
                    <Pressable style={styles.buttonRight} onPress={rightOnPress}>
                        {hasRight && right}
                    </Pressable>
                }
                {/* When the input is password */}
                {password &&
                    <Pressable style={styles.buttonRight} onPress={rightOnPress}>
                        <MIcon
                            onPress={() => setHidePassword(!hidePassword)}
                            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                            size={24}
                        // style={{ color: COLORS.darkBlue, fontSize: 22 }}
                        />
                    </Pressable>}

            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>

    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        gap: 5
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: verticalScale(40),
        width: moderateScale(250),
        paddingLeft: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        fontSize: 17
    },
    withIconLeftInput: {
        marginLeft: 6,
        width: "100%"
    },
    withIconRightInput: {
        width: "100%",
        fontSize: 17,
        height: verticalScale(40),
    },
    buttonRight: {
        position: "absolute",
        right: 20
    },
    input: {
        height: verticalScale(40),
        padding: 10,
        paddingLeft: 20,
        width: moderateScale(250),
        backgroundColor: 'white',
        borderRadius: 25,
        fontSize: 17
    },
    error: {
        color: "red",
        fontSize: 15,
    }
})