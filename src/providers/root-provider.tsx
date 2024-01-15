import React from 'react'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider as ReduxProvider } from 'react-redux'
import { MD2DarkTheme, MD2LightTheme, MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';

import {
    InitialState,
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import paperTheme from '@/styles/paper-theme';
import { store } from '@/rtk';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApolloProvider from './apollo-provider';

type RootProviderProps = {
    children: React.ReactNode
}

const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const PREFERENCES_KEY = 'APP_PREFERENCES';

const RootProvider = ({ children }: RootProviderProps) => {
    const stylePaperTheme = paperTheme()

    // const [fontsLoaded] = useFonts({
    //     Abel: require('../assets/fonts/Abel-Regular.ttf'),
    //   });

    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState<
        InitialState | undefined
    >();

    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [themeVersion, setThemeVersion] = React.useState<2 | 3>(3);
    const [collapsed, setCollapsed] = React.useState(false);
    const [customFontLoaded, setCustomFont] = React.useState(false);
    const [rippleEffectEnabled, setRippleEffectEnabled] = React.useState(true);

    const theme = React.useMemo(() => {
        if (themeVersion === 2) {
            return isDarkMode ? MD2DarkTheme : MD2LightTheme;
        }

        return isDarkMode ? MD3DarkTheme : MD3LightTheme;
    }, [isDarkMode, themeVersion]);

    React.useEffect(() => {
        const savePrefs = async () => {
            try {
                await AsyncStorage.setItem(
                    PREFERENCES_KEY,
                    JSON.stringify({
                        theme: isDarkMode ? 'dark' : 'light',
                    })
                );
            } catch (e) {
                // ignore error
            }
        };

        savePrefs();
    }, [isDarkMode]);


    React.useEffect(() => {
        const restoreState = async () => {
            try {
                const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
                const state = JSON.parse(savedStateString || '');

                setInitialState(state);
            } catch (e) {
                // ignore error
            } finally {
                setIsReady(true);
            }
        };

        if (!isReady) {
            restoreState();
        }
    }, [isReady]);

    React.useEffect(() => {
        const restorePrefs = async () => {
            try {
                const prefString = await AsyncStorage.getItem(PREFERENCES_KEY);
                const preferences = JSON.parse(prefString || '');

                if (preferences) {
                    setIsDarkMode(preferences.theme === 'dark');
                }
            } catch (e) {
                // ignore error
            }
        };

        restorePrefs();
    }, []);


    React.useEffect(() => {
        const savePrefs = async () => {
            try {
                await AsyncStorage.setItem(
                    PREFERENCES_KEY,
                    JSON.stringify({
                        theme: isDarkMode ? 'dark' : 'light',
                    })
                );
            } catch (e) {
                // ignore error
            }
        };

        savePrefs();
    }, [isDarkMode]);

    const preferences = React.useMemo(
        () => ({
            toggleTheme: () => setIsDarkMode((oldValue) => !oldValue),
            toggleCollapsed: () => setCollapsed(!collapsed),
            toggleCustomFont: () => setCustomFont(!customFontLoaded),
            toggleRippleEffect: () => setRippleEffectEnabled(!rippleEffectEnabled),
            toggleThemeVersion: () => {
                setCustomFont(false);
                setCollapsed(false);
                setThemeVersion((oldThemeVersion) => (oldThemeVersion === 2 ? 3 : 2));
                setRippleEffectEnabled(true);
            },
            customFontLoaded,
            rippleEffectEnabled,
            collapsed,
            theme,
        }),
        [theme, collapsed, customFontLoaded, rippleEffectEnabled]
    );

    if (!isReady
        // && !fontsLoaded
    ) {
        return null;
    }


    const { LightTheme, DarkTheme } = adaptNavigationTheme({
        reactNavigationLight: NavigationDefaultTheme,
        reactNavigationDark: NavigationDarkTheme,
    });

    const CombinedDefaultTheme = {
        ...MD3LightTheme,
        ...LightTheme,
        colors: {
            ...MD3LightTheme.colors,
            ...LightTheme.colors,
        },
    };

    const CombinedDarkTheme = {
        ...MD3DarkTheme,
        ...DarkTheme,
        colors: {
            ...MD3DarkTheme.colors,
            ...DarkTheme.colors,
        },
    };

    const combinedTheme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;
    const configuredFontTheme = {
        ...combinedTheme,
        // fonts: configureFonts({
        //     config: {
        //         fontFamily: 'Abel',
        //     },
        // }),
    };

    return (
        // <SafeAreaProvider>
        //     <GestureHandlerRootView style={{ flex: 1 }}>
                <ApolloProvider>
                    <ReduxProvider store={store}>
                        <PaperProvider
                            settings={{ rippleEffectEnabled: preferences.rippleEffectEnabled }}
                            theme={customFontLoaded ? configuredFontTheme : theme}
                        >
                            <SafeAreaInsetsContext.Consumer>
                                {(insets) => {
                                    // const { left, right } = insets || { left: 0, right: 0 };
                                    // const collapsedDrawerWidth = 80 + Math.max(left, right);
                                    return children;
                                }}
                            </SafeAreaInsetsContext.Consumer>
                        </PaperProvider>
                    </ReduxProvider>
                </ApolloProvider>
        //     </GestureHandlerRootView>
        // </SafeAreaProvider>
    )
}

export default RootProvider
