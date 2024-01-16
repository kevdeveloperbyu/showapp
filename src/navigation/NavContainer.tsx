import React from 'react';
import { NavigationContainer, NavigationContainerRefWithCurrent, InitialState } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import linking from './deeplinks/linkingConfig';
import { Provider } from 'react-redux';

import { navigationRef } from './RootNavigation';

// SCREEN TRACKING
import analytics from '@react-native-firebase/analytics';
import { StatusBar, Text, View, useColorScheme } from 'react-native';
// ** BOOTSPLASH SCREEN **
import BootSplash from "react-native-bootsplash";


const NavContainer: React.FC = () => {

  const routeNameRef = React.useRef<any>(); //referencia del nombre de la ruta
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={<Text>Cargando...</Text>}
      linking={linking}
      onReady={() => {
        BootSplash.hide({ fade: true })
        // if (navigationRef.isReady()) {
        //   routeNameRef.current = navigationRef.getCurrentRoute();
        // }

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
              // `Added to firebase, previous: ${previousRouteName} current: ${currentRouteName}`,
            );
          } catch (error) {
            console.error("Error to follow the screen:", error)
          }
        }
        routeNameRef.current = currentRouteName;
      }}
    >

      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={Colors}
      />
      <AppNavigator />
    </NavigationContainer>

  );
};

export default NavContainer;