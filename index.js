/**
 * @format
 */

// Docs stack navigator https://reactnavigation.org/docs/stack-navigator/
// import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './src/App';
import appInfo from './app.json';

import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(
  Platform.OS === 'ios' ? appInfo.ios.name : appInfo.android.name,
  () => App,
);
