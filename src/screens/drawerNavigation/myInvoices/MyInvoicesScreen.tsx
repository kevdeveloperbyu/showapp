import React from 'react'
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const MyInvoicesScreen = ({navigation, route}) => {
  return (
    <View>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginRight: 20}}
        onPress={() => navigation.navigate('Home')}>
        <AntDesign name="closecircleo" color={'black'} size={30} />
      </TouchableOpacity>
        <Text>My invoices screen</Text>
    </View>
  )
}

export default MyInvoicesScreen;
