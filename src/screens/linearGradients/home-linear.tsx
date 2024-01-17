import { sizes } from '@/constants/theme';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenTemplateProps = {
    children: React.ReactNode,
}

const HomeLinear = ({ children }: ScreenTemplateProps) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <LinearGradient
                style={styles.safeAreaView}
                // start={{ x: 0, y: 0 }}
                // end={{ x: 1, y: 0 }}
                // colors={['#6C141B', 'black']}
                colors={['#751D1C', '#170C0C', '#0C0B0B']}
                // style={{ flex: 1 }}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.3, 1]} // Aquí configuramos la ubicación del 85%
            // useAngle
            // angle={45} // Ángulo del gradiente (puedes ajustarlo según tus necesidades)
            // style={{ flex: 1 }}
            >
                {children}
            </LinearGradient >
        </SafeAreaView>
    )
}

export default HomeLinear

const styles = StyleSheet.create({
    safeAreaView: {
        height: sizes.height
    }
});