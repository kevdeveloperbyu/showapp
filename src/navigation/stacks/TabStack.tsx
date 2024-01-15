import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeController from '../../screens/tabNavigation/home/HomeController';
import TicketsController from '../../screens/tabNavigation/tickets/TicketsController';
import OnlineEventsController from '../../screens/drawerNavigation/onlineEvents/OnlineEventsController';
import MyAccountController from '../../screens/drawerNavigation/myAccount/MyAccountController';
import CategoriesController from '../../screens/tabNavigation/categories/CategoriesController';
import CouponsController from '../../screens/tabNavigation/coupons/CouponsController';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { Alert, Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ScreenTemplate from '../../screens/linearGradients/home-linear';
import { Appbar, MD2Colors } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import VectorImage from 'react-native-vector-image';
import AppBar, { MODE_APPBAR } from '@/components/app-bar';

enum STACK_NAMES {

}

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const SIZE_ICON = 24
  const WHITE = "white"

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        headerShown: true,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          // console.log("nav", navigation.canGoBack())
          return (
            <AppBar navigation={navigation}   />
          );
        },

      }}
      initialRouteName="Home"
    >

      <Tab.Screen
        name="Inicio"
        component={HomeController}
        options={({ navigation, route: { params } }) => ({
          tabBarLabel: "Inicio",
          tabBarAccessibilityLabel: "Inicio",
          tabBarLabelStyle: { color: WHITE },
          tabBarBadge: params && 'badge' in params ? Number(params.badge) : undefined,
          tabBarIcon: ({ focused }) =>
            focused ?
              (<Entypo name="home" color={WHITE} size={SIZE_ICON} />)
              : (<AntDesign name="home" color={WHITE} size={SIZE_ICON} />),
        })}
      />

      <Tab.Screen
        name="Categories"
        component={CategoriesController}
        options={({ route: { params } }) => ({
          tabBarLabel: 'Categorias',
          tabBarAccessibilityLabel: "Categorias",
          tabBarLabelStyle: { color: WHITE },
          tabBarBadge: params && 'badge' in params ? Number(params.badge) : undefined,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IonIcons name="book" color={WHITE} size={SIZE_ICON} />
            ) : (
              <IonIcons name="book-outline" color={WHITE} size={SIZE_ICON} />
            ),
        })}
      />

      <Tab.Screen
        name="Coupons"
        component={CouponsController}
        options={({ route: { params } }) => ({
          tabBarLabel: 'Explorar',
          tabBarAccessibilityLabel: "Explorar",
          tabBarLabelStyle: { color: WHITE },
          tabBarBadge: params && 'badge' in params ? Number(params.badge) : undefined,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IonIcons name="search" color={WHITE} size={SIZE_ICON} />
            ) : (
              <IonIcons name="search-outline" color={WHITE} size={SIZE_ICON} />
            ),
        })}
      />

      <Tab.Screen
        name="Tickets"
        component={TicketsController}
        options={({ route: { params } }) => ({
          tabBarLabel: 'Tickets',
          tabBarAccessibilityLabel: "Tickets",
          tabBarLabelStyle: { color: WHITE },
          tabBarBadge: params && 'badge' in params ? Number(params.badge) : undefined,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IonIcons name="ticket" color={WHITE} size={SIZE_ICON} />
            ) : (
              <IonIcons name="ticket-outline" color={WHITE} size={SIZE_ICON} />
            ),
        })}
      />

    </Tab.Navigator>
  );
};

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
  appBarColor: {
    backgroundColor: MD2Colors.transparent,
    position: "absolute",
    width: "100%"
  }
})

export default TabStack;
