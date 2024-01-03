import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeController from '../../screens/tabNavigation/home/HomeController';
import TicketsController from '../../screens/tabNavigation/tickets/TicketsController';
import OnlineEventsController from '../../screens/drawerNavigation/onlineEvents/OnlineEventsController';
import MyAccountController from '../../screens/drawerNavigation/myAccount/MyAccountController';
import CategoriesController from '../../screens/tabNavigation/categories/CategoriesController';
import CouponsController from '../../screens/tabNavigation/coupons/CouponsController';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TabStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="2Show"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
        component={HomeController}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketsController}
        options={{
          tabBarLabel: 'Tickets',
          tabBarIcon: ({color, size}) => (
            <Entypo name="ticket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesController}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="category" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Coupons"
        component={CouponsController}
        options={{
          tabBarLabel: 'Coupons',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="gift" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabStack;
