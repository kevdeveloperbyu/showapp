import { inDevelopment } from '@/lib/inDevelopment';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ItemToggleCardProps } from './toggle-card';



const VerticalItemToggleCard = ({ src, title, description, httpSrc }: ItemToggleCardProps) => {

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
            inDevelopment()
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

const MAX_WIDTH = 170
const styles = StyleSheet.create({
  card: {
    margin: 12,
    overflow: 'hidden',
    position: "relative",
    flexDirection: "column"
  },
  surface: {
    aspectRatio: 1,
    width: '100%',
    height: MAX_WIDTH,
    flexDirection: "column"

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
    width: "100%",
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

export default VerticalItemToggleCard;