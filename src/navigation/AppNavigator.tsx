import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './stacks/DrawerStack';
import AuthStack from './stacks/AuthStack';
import auth from '@react-native-firebase/auth';
import { authServices, logOut } from '../services';
import { Appbar } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { getHeaderTitle } from '@react-navigation/elements';
import CategoriesController from '@/screens/tabNavigation/categories/CategoriesController';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '@/services/apollo/query-events';
import { QUERY_USERS } from '@/services/apollo/users/query-users';
import { setAuthInitialState } from '@/rtk';
import { useDispatch } from 'react-redux';


const Stack = createNativeStackNavigator<any>();

const AppNavigator: any = () => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch()

  // const { loading, error, data } = useQuery(QUERY_EVENTS, {
  //   // variables: { breed },
  //   variables: {
  //     "input": {
  //       "eventType": "soccer"
  //       // "modalityType": ["presential", "online"]
  //     }
  //   }
  // });

  // if (loading) return null;
  // if (error) return `Error! ${error}`;
  // console.log("apollo data", data)

  //firebase user
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    // console.log("user", user)
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  console.log("authent user", user)

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    );
  }

  // dispatch(setAuthInitialState({
  //   email: user.email ?? "",
  //   firebaseID: user.uid ?? "1"
  // }))



  // authServices.logOut()

  // return <Button
  //   onPress={async () => { console.log("signout"); authServices.logOut(); }}
  //   title="Logout button"
  //   color="#841584"
  //   accessibilityLabel="Learn more about this purple button"
  // />


  return (
    <Stack.Navigator
      initialRouteName='Inicio'
      screenOptions={({ navigation }) => {
        return {
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          // detachPreviousScreen: !navigation.isFocused(),
        };
      }}
    >
      <Stack.Screen name="Inicio" component={HomeStack} />
      <Stack.Screen name="Events" component={CategoriesController} />
    </Stack.Navigator>
  );

};

export default AppNavigator;
