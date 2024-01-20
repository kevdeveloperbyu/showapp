import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  primary: '#070f18',
  gray: '#8b8989',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  red: '#FF0000',
  white: '#fff',
  black: '#000',
  // FROM FIGMA VARIABLES
  // gray: '#323030',
  // lightGray: '#AEA6A6',
  yellow: '#F29B19',
  darkPrimary: '#540E1F',
  // primary: '#751D1C',
  lightPrimary: '#B40A32',
  green: '#286900',
  extraLightPrimary: '#FF2147',
  brownBG: '#370B07',
  grayBG: "#494747",
  grayBGCard: '#D9D9D9'
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  caption: 12,
  radius: 16,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};

export const sizeIcon = {
  m: 24,
  l: 30
}
