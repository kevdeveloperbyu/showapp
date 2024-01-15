import React from 'react'
import { View } from 'react-native'
import { category } from '../../../components/types/types';
import CategoriesScreen from './CategoriesScreen'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends DrawerScreenProps<any, any> { };


const CategoriesController = ({ navigation }: Props) => {

  // React.useEffect(() => {
  //   navigation.getParent()?.setOptions({
  //     headerShown: false
  //   })

  //   navigation.setOptions({
  //     headerShown: false
  //     // headerLeft: () => <TouchableOpacityonPress={() => { navigation.toggleDrawer() }}>
  //     //   <Entypo name="menu" style={{ marginLeft: 10 }} color={'black'} size={30} />
  //     // </TouchableOpacityonPress=>

  //   });
  // }, [])


  return (
    <SafeAreaView>
      <CategoriesScreen />
    </SafeAreaView>
  )
}

export default CategoriesController