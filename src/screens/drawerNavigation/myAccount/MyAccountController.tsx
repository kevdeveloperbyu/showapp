import React, { useEffect } from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MyAccountScreen from './MyAccountScreen'
import { DrawerScreenProps } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import { PropsUser } from '../../../components/types/types';

interface Props extends DrawerScreenProps<any, any>{};


const MyAccountController = ({navigation, route}:Props) => {

   
  const userData: PropsUser = {
    name: 'Kevin Morales',
    img: 'hola.png',
    email: 'kmorales201314@gmail.com',
    birthday: '1994/03/19',
    telephone: '0963301828',
  };
  return (
    <SafeAreaView>
        <MyAccountScreen user={userData} navigation={navigation} route={route} />
    </SafeAreaView>
  )
}

export default MyAccountController;