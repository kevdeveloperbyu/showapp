import React from 'react';
import { NavigationContainer, NavigationContainerRefWithCurrent } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import linking from './deeplinks/linkingConfig';
import { Provider } from 'react-redux';

import { navigationRef } from './RootNavigation';

// screen tracking
import analytics from '@react-native-firebase/analytics';
import { store } from '../rtk/store/store';
import { Text, View } from 'react-native';

const NavContainer: React.FC = () => {
  const routeNameRef = React.useRef<any>(); //referencia del nombre de la ruta

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        fallback={<Text>Cargando...</Text>}
        linking={linking}
        onReady={() => {
          // if (navigationRef.isReady()) {
          //   routeNameRef.current = navigationRef.getCurrentRoute();
          // }
          
          console.log("well gimme current route", navigationRef.current)
          console.log("well gimme GET CURRENT", navigationRef.current?.getCurrentRoute())
          routeNameRef.current = navigationRef.current?.getCurrentRoute();
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const previousRouteName__ = routeNameRef.current?.name; // asegúrate de que es seguro acceder a name

          // const currentRouteName = navigationRef.current.getCurrentRoute();
          const currentRouteName = navigationRef.current?.getCurrentRoute();


          console.log("gimme previous Route: ", JSON.stringify(previousRouteName))
          if (previousRouteName !== currentRouteName) {
            try {
              await analytics().logScreenView({
                // screen_name: currentRouteName.name ,
                screen_name: "Home",
                // screen_class: currentRouteName.name,
                screen_class: "MainSection",
              });
              console.log(
                `Added to firebase, previous: ${previousRouteName} current: ${currentRouteName}`,
              );
            } catch (error) {
              console.error("Error to follow the screen:", error)
            }
          }
          routeNameRef.current = currentRouteName;
        }}
      >
        <AppNavigator />
      </NavigationContainer>
    </Provider>

  );
};

export default NavContainer;
