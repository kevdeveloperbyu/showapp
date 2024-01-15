import { Alert, Image } from 'react-native'
import React from 'react'
import { Divider, Menu } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { ParamListBase } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { authServices } from '@/services'

/**
 * onDismiss
  * Callback called when Menu is dismissed. The `visible` prop needs to be updated when this is called.
  */

type UserMenuProps = {
    visible: boolean
    onDismiss: () => void
    anchorPosition?: "bottom" | "top"
    anchor: React.ReactNode | {
        x: number;
        y: number;
    },
    navigation: BottomTabNavigationProp<ParamListBase, string, undefined>
}

const UserMenu = ({ visible, onDismiss, anchor, anchorPosition = "bottom", navigation }: UserMenuProps) => {
    return (
        <Menu
            visible={visible}
            onDismiss={onDismiss}
            anchorPosition={anchorPosition}
            anchor={anchor}>
            <Menu.Item onPress={() => Alert.alert('Editing Profile...', 'Set something', [{ text: 'OK' }])} title="Editar Perfil"
                leadingIcon={({ color, size }) =>
                    <Image
                        source={require('src/assets/images/edit-icon.png')}
                        style={{
                            aspectRatio: 1,
                            width: 30,
                            height: 30,
                            // width: size,
                            // height: size,
                            alignSelf: 'center',
                            padding: 0,
                            margin: 0,
                            resizeMode: 'contain'
                        }}
                    />
                }
            />
            <Divider />

            {(navigation as any).openDrawer &&
                <Menu.Item
                    title="Configuracion"
                    onPress={() => {
                        (
                            navigation as any as DrawerNavigationProp<{}>
                        ).openDrawer();
                        onDismiss()
                    }}
                    leadingIcon={({ color, size }) => <IonIcons name='settings-sharp' color={color} size={size} />}
                />
            }

            <Menu.Item
                title="Cerrar cuenta"
                onPress={() => {
                    onDismiss()
                    authServices.logOut();
                }}
                leadingIcon={({ color, size }) => <IonIcons name='log-out-outline' color={color} size={size} />}
            />

        </Menu>
    )
}

export default UserMenu