import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabStack from './TabStack';
import OnlineEventsController from '../../screens/drawerNavigation/onlineEvents/OnlineEventsController';
import PhysicalEventScreen from '../../screens/drawerNavigation/physicalEvents/PhysicalEventScreen';
import MyAccountController from '../../screens/drawerNavigation/myAccount/MyAccountController';
import MyInvoicesController from '../../screens/drawerNavigation/myInvoices/MyInvoicesController';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DetailPhysicalEventController from '../../screens/drawerNavigation/detailPhysicalEvent/DetailPhysicalEventController';
import BuyEventWithController from '../../screens/drawerNavigation/buyEventWith/BuyEventWithController';

import 'react-native-gesture-handler';


import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={TabStack}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return <Entypo name="home" color={color} size={size} />;
          },
        }}
      />
      {/* <Drawer.Screen
        name="My Online Events"
        component={OnlineEventsController}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return (
              <MaterialIcons name="book-online" color={color} size={size} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="My Life Events"
        component={PhysicalEventScreen}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return <MaterialIcons name="event" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={MyInvoicesController}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return <Entypo name="wallet" color={color} size={size} />;
          },
        }}
      />

      <Drawer.Screen
        name="My Account"
        component={MyAccountController}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return <Entypo name="user" color={color} size={size} />;
          },
        }}
      /> */}
      {/* gives me an error with reanimated */}
      {/* <Drawer.Screen
        name="My Detail Event"
        component={DetailPhysicalEventController}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return <Entypo name="user" color={color} size={size} />;
          },
          drawerItemStyle: {height: 0},
        }}
      /> */}
      <Drawer.Screen
        name="Buy event with"
        component={BuyEventWithController}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return <Entypo name="user" color={color} size={size} />;
          },
          drawerItemStyle: {height: 0},
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DrawerStack;
