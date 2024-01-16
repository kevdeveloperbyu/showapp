import React, { useEffect, type PropsWithChildren } from 'react';

import {
  requestUserPermission,
  NotificationListener,
} from './utils/notifications_helper';

import NavContainer from './navigation/NavContainer';
import RootProvider from './providers/root-provider';


const App = () => {
  // useEffect(() => {
  //   requestUserPermission();
  //   NotificationListener();
  // }, []);

  return (
    <RootProvider>
        <NavContainer />
    </RootProvider>

  )
};

export default App;
