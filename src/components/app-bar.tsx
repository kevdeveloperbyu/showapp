import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, IconButton, MD2Colors, MD3Colors } from 'react-native-paper'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { ParamListBase } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

import Avatar from './avatar'
import SearchBar from './search-bar'
import LoadingIcon from './loading-icon'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserMenu from './menu/user-menu'
import GreetingMessage from './greeting-message'
import { useSelector } from 'react-redux'
import { RootState } from '@/rtk'
import { sizes } from '@/constants/theme'

export enum MODE_APPBAR {
    DEFAULT = "DEFAULT",
    TICKET = "TICKET",
    MENU = "MENU",
    SEARCH = "SEARCH",
    INFO = "INFO",
    LOADING = "LOADING",
}

type AppBarProps = {
    content?: string | React.ReactElement<string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null
    mode?: MODE_APPBAR,
    navigation: BottomTabNavigationProp<ParamListBase, string, undefined>
}

type UserMenuProps = {
    onPress: () => void
    title: string,
    icon: React.ReactNode
}

const AppBar = ({
    content = "",
    mode = MODE_APPBAR.DEFAULT,
    navigation
}: AppBarProps) => {
    const [visible, setVisible] = React.useState(false);
    const [viewRef, setViewRef] = React.useState(null);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const user = useSelector((state: RootState) => state.auth)
    const { email } = user.user


    const logoImage = require('src/assets/images/whitelogo.png')

    const canGoBackOrLogo = React.useMemo(() => (
        (navigation as any).canGoBack() ?
            // ICON BACK
            <Appbar.Action icon={() =>
                <Image
                    source={logoImage}
                    style={{
                        // aspectRatio: 1,
                        width: 50,
                        height: 30,
                        alignSelf: 'center',
                        padding: 0,
                        margin: 0,
                        resizeMode: 'contain'
                    }}
                />
            }
                size={APPBAR_SIZE_ICON}
                style={styles.appBarAction}
            />
            :
            // ICON LOGO
            <Appbar.Action icon={() =>
                <Image
                    source={logoImage}
                    style={{
                        // aspectRatio: 1,
                        width: 50,
                        height: 30,
                        alignSelf: 'center',
                        padding: 0,
                        margin: 0,
                        resizeMode: 'contain'
                    }}
                />
            }
                onPress={closeMenu}
                size={APPBAR_SIZE_ICON}
                style={styles.appBarAction}
            />
    ), [navigation.canGoBack()])


    return (
        <Appbar.Header elevated mode='center-aligned' style={styles.appBarColor}>
            {/* MODE DEFAULT */}
            {mode === MODE_APPBAR.DEFAULT &&
                <>
                    {canGoBackOrLogo}

                    <Appbar.Content title={content} />

                    {/* {(navigation as any).openDrawer &&
                        <Appbar.Action icon={() => <Avatar />}
                            onPress={() =>
                                // (
                                    //     navigation as any as DrawerNavigationProp<{}>
                                // ).openDrawer()
                                openMenu()
                            }
                            size={APPBAR_SIZE_ICON}
                            style={styles.appBarAction}
                            />
                        } */}
                    <UserMenu
                        navigation={navigation}
                        visible={visible}
                        onDismiss={closeMenu}
                        anchorPosition='bottom'
                        anchor={
                            <IconButton
                                icon={() => <Avatar />}
                                iconColor={MD3Colors.error50}
                                size={APPBAR_SIZE_ICON}
                                onPress={openMenu}
                            />
                        }
                    />
                    <GreetingMessage username={email ?? 'Kevin Morales'} gretting />
                </>
            }

            {/* MODE TICKET NOT IMPLEMENT YET*/}
            {
                mode === MODE_APPBAR.TICKET &&
                <>
                </>
            }

            {/* MODE MENU */}
            {
                mode === MODE_APPBAR.MENU &&
                <>
                    {canGoBackOrLogo}

                    <Appbar.Content title={content} />

                    {(navigation as any).openDrawer &&
                        <Appbar.Action
                            icon="dots-vertical"
                            color="white"
                            size={APPBAR_SIZE_ICON}
                            style={styles.appBarAction}
                            onPress={() =>
                                (
                                    navigation as any as DrawerNavigationProp<{}>
                                ).openDrawer()
                            }
                        />
                    }
                </>
            }

            {/* MODE SEARCH */}
            {
                mode === MODE_APPBAR.SEARCH &&
                <>
                    <Appbar.Content
                        title={
                            <SearchBar onIconPress={() => Alert.alert('Searching...', 'Mensaje here', [{ text: 'OK' }])
                            } onTraileringIconPress={() => Alert.alert('Listening...', 'Another Mensaje ', [{ text: 'OK' }])} />
                        }
                    />
                </>
            }

            {/* MODE INFO */}
            {
                mode === MODE_APPBAR.INFO &&
                <>
                    {canGoBackOrLogo}

                    <Appbar.Content title={content} />

                    {(navigation as any).openDrawer &&
                        <Appbar.Action icon={({ color, size }) => <MaterialCommunityIcons name='information-outline' size={APPBAR_SIZE_ICON} color={color} />
                        }
                            onPress={() =>
                                (
                                    navigation as any as DrawerNavigationProp<{}>
                                ).openDrawer()
                            }
                            size={APPBAR_SIZE_ICON}
                            style={styles.appBarAction}
                        />
                    }
                </>
            }

            {/* MODE LOADING */}
            {
                mode === MODE_APPBAR.LOADING &&
                <>
                    {canGoBackOrLogo}

                    <Appbar.Content title={"Cargando.."} style={styles.appBarContent} />

                    {(navigation as any).openDrawer &&
                        <Appbar.Action
                            icon={({ color, size }) => <LoadingIcon loading={true} color={color} size={size} />}
                            onPress={() => (navigation as any as DrawerNavigationProp<{}>).openDrawer()}
                            size={APPBAR_SIZE_ICON}
                            style={styles.appBarAction}
                        />
                    }
                </>
            }


        </Appbar.Header >

    )
}

export default AppBar

export const APPBAR_SIZE_ICON = 30

const styles = StyleSheet.create({
    appBarColor: {
        backgroundColor: MD2Colors.transparent,
        position: "absolute",
        width: sizes.width,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100
    },
    appBarAction: {
        alignSelf: "center",
        borderRadius: 0,
    },
    appBarContent: {
        alignItems: "center"
    }
})