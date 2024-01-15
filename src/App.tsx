import React, { useEffect, type PropsWithChildren } from 'react';

import {
  requestUserPermission,
  NotificationListener,
} from './utils/notifications_helper';

import NavContainer from './navigation/NavContainer';
import RootProvider from './providers/root-provider';
import Loader from './components/svg/svg-notation';


const App = () => {
  // useEffect(() => {
  //   requestUserPermission();
  //   NotificationListener();
  // }, []);

  // return <Loader/>
  return (
    <RootProvider>
        <NavContainer />
    </RootProvider>

  )
};

export default App;
