module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // ***** DOCS *****
  // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#step-2-add-reanimateds-babel-plugin
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/test': ['./__tests__/'],
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/lib': './src/lib',
          '@/navigation': './src/navigation',
          '@/providers': './src/providers',
          '@/rtk': './src/rtk',
          '@/screens': './src/screens',
          '@/services': './src/services',
          '@/styles': './src/styles',
          '@/types': './src/types',
          '@/utils': './src/utils',
          '*': ['src/*'],
        },
      },
    ],
  ],
};
