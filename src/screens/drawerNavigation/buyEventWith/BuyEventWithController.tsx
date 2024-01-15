import React from 'react';
import BuyEventWithScreen from './BuyEventWithScreen';
interface Props extends DrawerScreenProps<any, any>{};



const BuyEventWithController = ({navigation, route}: Props) => {
  return (
    <>
      <BuyEventWithScreen route={route} navigation={navigation} />
    </>
  );
};

export default BuyEventWithController;
