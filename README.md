# 2ShowApp :heart:

## Step 1: Start the Metro Server

```bash
npm start
```

## Step 1 (Option 2): Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

## Tech Stack

- [x] Firebase
- [x] Async Storage
- [x] Redux Toolkit
- [x] App Center
- [ ] QR Code (not in use)

# Docs

- [React Native Navigator](https://reactnavigation.org/docs/navigating) - Navigation.
- [Firebase Console](https://rnfirebase.io/) - **Firebase** Docs.
- [App Center](https://learn.microsoft.com/en-us/appcenter/sdk/getting-started/react-native) - Learn the **Basics**.
- [JitPack](https://docs.jitpack.io/intro/) - official JitPack **Docs**.
- [`Redux Toolkit`](https://redux-toolkit.js.org/introduction/getting-started#create-a-react-redux-app) - State for React Native.
- [`Bootsplash`](https://github.com/zoontek/react-native-bootsplash) - Splash Screen.
- [`Reanimated`](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation) - Animations for React Native.
- [`QR Code`](https://www.npmjs.com/package/react-native-qrcode-svg) - QR Code SVG.
- [`React Native Vector Image`](https://github.com/oblador/react-native-vector-image) - iOS/Android native vector assets generated from SVG.

## Bootsplash

Example command to configurate the image .png
Note: OS (Linux Mint 21) is required to have the module sharp (High performance 
Node.js image processing)

```bash
npm i sharp
npm rebuild --verbose sharp
```

```bash
npx react-native generate-bootsplash --help
# Current example
npx react-native generate-bootsplash \
assets/white-logo.png \
--platforms=android,ios \
--background=540E1F \
--logo-width=100 \
--assets-output=assets \
--flavor=main
```
This generating some available images .png  to android or ios in android/app/src/main/res/drawable/*

Tutorial: https://www.youtube.com/watch?v=3ZIMax_azcc || https://www.youtube.com/watch?v=WuyAnmH6bSo