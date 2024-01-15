import React from 'react'
import { Menu } from 'react-native-paper'
import { IconButtonProps, IconProps } from 'react-native-vector-icons/Icon'

type MenuItemProps = {
    onPress: () => void
    title: string,
    typeIcon: React.ComponentType<IconButtonProps>; // Asegúrate de que IconButtonProps sea importado desde 'react-native-paper'
    iconName: string
}

const MenuItem = ({ onPress, title, typeIcon: Icon, iconName }: MenuItemProps) => {
    return (
        <Menu.Item onPress={onPress} title={title}
            // leadingIcon={({ color, size }) => <Icon name='edit' />}
            leadingIcon={({ color, size }) => <Icon name='edit' color={color} size={size} />}
        />
    )
}

export default MenuItem