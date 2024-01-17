import { inDevelopment } from '@/lib/inDevelopment';
import React from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ItemToggleCardProps } from './toggle-card';
import { sizes } from '@/constants/theme';



const HorizontalItemToggleCard = ({ src, title, description, httpSrc }: ItemToggleCardProps) => {

    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={(e) => {
            e.stopPropagation();
            inDevelopment()
        }
        }>
            <>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.surface}
                    onPress={(e) => {
                        e.stopPropagation();
                        inDevelopment();
                    }}
                >
                    <Image source={httpSrc ? { uri: httpSrc } : src} style={styles.image}

                        onError={(error) => console.log('Error loading image:', error)}
                    />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
                    <Text numberOfLines={1} style={styles.descriptionText}>{description}</Text>
                </View>
            </>

        </TouchableOpacity >
    );
};

const MAX_WIDTH = 90
const styles = StyleSheet.create({
    card: {
        margin: 12,
        overflow: 'hidden',
        position: "relative"
    },
    surface: {
        aspectRatio: 1,
        width: sizes.width,
        height: MAX_WIDTH,
    },
    image: {
        aspectRatio: 1,
        borderRadius: 16,
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    },
    textContainer: {
        paddingTop: 6,
        width: sizes.width,
        flexDirection: "column",

    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        // maxWidth: '10%', // Establece un ancho máximo
        width: MAX_WIDTH,
        flexWrap: "nowrap",
        flexShrink: 1
    },
    descriptionText: {
        fontSize: 12,
        color: 'white',
    },
});

export default HorizontalItemToggleCard;
