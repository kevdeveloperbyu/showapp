import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type GreetingMessageProps = {
    username?: string
    gretting?: boolean
}

const GreetingMessage = ({ username, gretting }: GreetingMessageProps) => {
    const greetingMessage = () => {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
            return "Buenos dias";
        } else if (currentTime < 16) {
            return "Buenas tardes";
        } else {
            return "Buenas noches";
        }
    };

    const messageTime = gretting ? greetingMessage() : null

    const message = gretting && username ?
        `${messageTime}, ${username}`
        : username ?
            `Hola, ${username}` : null

    return (
        <View>
            <Text style={styles.greetingMessage}>
                {message}
            </Text>
        </View>
    )
}

export default GreetingMessage

const styles = StyleSheet.create({
    greetingMessage: {
        // fontSize: 18,
        fontWeight: "bold",
        color: "white",
        position: "absolute",
        right: 0,
        marginRight: 16,
        top: 24
    }
})