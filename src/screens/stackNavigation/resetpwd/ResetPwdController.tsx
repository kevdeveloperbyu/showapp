import React from 'react';
import ResetPwdScreen from './ResetPwdScreen';
import {View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
interface Props extends DrawerScreenProps<any, any>{};


const ResetPwdController = ({navigation, route}: Props) => {
  return (
    <View>
      <ResetPwdScreen navigation={navigation} route={route} />
    </View>
  );
};

export default ResetPwdController;
