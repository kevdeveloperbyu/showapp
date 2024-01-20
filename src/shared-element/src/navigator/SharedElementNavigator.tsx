import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import { Data } from '../data/data';
import { StyleSheet, Text } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import AppBar from '@/components/app-bar';

export type SharedElementStackParamList = {
  Home: undefined;
  Detail: { item: Data };
};

const SharedElementNavigator = () => {
  const Stack = createNativeStackNavigator<SharedElementStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        // tabBarStyle: styles.tabBarStyle,
        // contentStyle: styles.tabBarStyle,
        headerShown: true,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <AppBar navigation={navigation}   />
          );
        },
        

      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          animation: 'slide_from_right',
          // animation: 'fade_from_bottom',
          // header: () => <Text>There is </Text>
        }}

      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedElementNavigator;

const styles = StyleSheet.create({
  headerStyle: { backgroundColor: '#fff' },
  tabBarStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // elevation: 20,
    shadowOffset: {
      width: 0,
      height: -4
    },
  },
})