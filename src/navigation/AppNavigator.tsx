import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './stacks/DrawerStack';
import AuthStack from './stacks/AuthStack';
import auth from '@react-native-firebase/auth';
import { Button, Text } from 'react-native';
import LoginController from '../screens/stackNavigation/login/LoginController';
import { Alert } from 'react-native';
import HomeController from '../screens/tabNavigation/home/HomeController';
import { authServices, logOut } from '../services';

const Stack = createNativeStackNavigator<any>();

const AppNavigator: any = () => {
  const [initializing, setInitializing] = useState(true);
  //firebase user
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log("user", user)
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log("gimme user", user)

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    );
  }

// authServices.logOut()

  // return <Button
  //   onPress={async () => { console.log("signout"); authServices.logOut(); }}
  //   title="Logout button"
  //   color="#841584"
  //   accessibilityLabel="Learn more about this purple button"
  // />


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );

};

export default AppNavigator;
