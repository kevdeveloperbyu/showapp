import { Appearance } from 'react-native';

import {
    MD2Theme,
    MD3DarkTheme,
    MD3LightTheme,
    MD3Theme,
    useTheme
} from 'react-native-paper';
import defaultTheme from './default-theme';

/*
 DOCS CURRENT COLOR SCHEME https://reactnative.dev/docs/appearance
 DOCS THEMING https://callstack.github.io/react-native-paper/docs/guides/theming
*/

enum COLOR_SCHEMA {
    DARK = 'dark',
    LIGHT = 'light'
}

export const getColorScheme = () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === COLOR_SCHEMA.DARK)
        return COLOR_SCHEMA.DARK
    if (colorScheme === COLOR_SCHEMA.LIGHT)
        return COLOR_SCHEMA.LIGHT
    return COLOR_SCHEMA.LIGHT
}

const paperTheme = () => {
    const colorScheme = getColorScheme()

    // TESTING PURPOSES
    const testingColor = { myOwnColor: '#BADA55', }
    const myOwnProperty = true

    const currentTheme =
        colorScheme === COLOR_SCHEMA.DARK
            ? {
                ...MD3DarkTheme, colors: {
                    ...MD3DarkTheme.colors,
                    ...testingColor
                }, myOwnProperty
            }
            : {
                ...MD3LightTheme, colors: {
                    ...MD3LightTheme.colors,
                    ...testingColor
                }, myOwnProperty
            };

    return currentTheme
}


export type AppTheme = typeof defaultTheme;
export const useAppTheme = () => useTheme<AppTheme>();
export const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();



export default paperTheme