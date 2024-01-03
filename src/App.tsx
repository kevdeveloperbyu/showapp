import React, { useEffect, type PropsWithChildren } from 'react';

import {
  requestUserPermission,
  NotificationListener,
} from './utils/notifications_helper';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavContainer from './navigation/NavContainer';
import { View } from 'react-native';


const App = () => {
  // useEffect(() => {
  //   requestUserPermission();
  //   NotificationListener();
  // }, []);

  // return <Text>Hello world</Text>

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavContainer />
    </GestureHandlerRootView>
  )
};

export default App;
