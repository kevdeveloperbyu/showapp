import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Avatar as AvatarPaper } from 'react-native-paper';
import { AvatarImageSource } from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
import { APPBAR_SIZE_ICON } from './app-bar';

type AvatarProps = {
  src?: AvatarImageSource
};

const Avatar = ({ src }: AvatarProps) => {
  return (
    <>
      {src ? (
        <AvatarPaper.Image size={APPBAR_SIZE_ICON} source={src} />)
        :
        // FALLBACK IMAGE
        <Image
          source={require("src/assets/images/example-avatar.png")}
          style={{
            aspectRatio: 1,
            width: APPBAR_SIZE_ICON,
            height: APPBAR_SIZE_ICON,
            alignSelf: 'center',
            resizeMode: 'contain'
          }}
        />
      }

    </>
  );
};

export default Avatar;
