import { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenTemplateProps = {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>;
}

const LoginLinear = ({ children, style }: ScreenTemplateProps) => {
    return (
        <SafeAreaView style={[style ]}>
            <LinearGradient
                style={styles.safeAreaView}
                // start={{ x: 0, y: 0 }}
                // end={{ x: 1, y: 0 }}
                // colors={['#6C141B', 'black']}
                colors={['#EC9FE9', '#DC96ED', '#BFA1E9', '#6EBDDF']}
                // style={{ flex: 1 }}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.4, 0.5, 1]} // Aquí configuramos la ubicación del 85%
            // useAngle
            // angle={45} // Ángulo del gradiente (puedes ajustarlo según tus necesidades)
            // style={{ flex: 1 }}
            >
                {children}
            </LinearGradient >
        </SafeAreaView>
    )
}

export default LoginLinear

const styles = StyleSheet.create({
    safeAreaView: {
        // height: '100%'
    }
});