import React, { useEffect, type PropsWithChildren } from 'react';

import {
  requestUserPermission,
  NotificationListener,
} from './utils/notifications_helper';

import NavContainer from './navigation/NavContainer';
import RootProvider from './providers/root-provider';
import SharedElementExample from './navigation/SharedElementExample';
import BootSplash from "react-native-bootsplash";
import SharedElementNavigator from './shared-element/src/navigator/SharedElementNavigator';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  // useEffect(() => {
  //   requestUserPermission();
  //   NotificationListener();
  // }, []);
  React.useEffect(() => {
    BootSplash.hide({ fade: true })
  }, [])
  return (
    <RootProvider>
      {/* <NavContainer /> */}
      {/* <SharedElementExample/> */}
      <NavigationContainer>

        <SharedElementNavigator />
      </NavigationContainer>
    </RootProvider>

  )
};

export default App;
