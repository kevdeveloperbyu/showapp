import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {category} from '../types/types';


const Category = (Props: category) => {
  if (Props.iconType == 'AntDesign') {
    console.log("this is the antdesign")
    return (
      <TouchableOpacity style={styles.container} key={Props.id} onPress={()=> Alert.alert("hola")}>
        <AntDesign name={Props.icon} color="white" size={30} />
      </TouchableOpacity>
    );
  } else if (Props.iconType == 'Entypo') {
    return (
      <TouchableOpacity style={styles.container} key={Props.id}>
        <Entypo name={Props.icon} color="white" size={30} />
      </TouchableOpacity>
    );
  } else if (Props.iconType == 'MaterialIcons') {
    return (
      <TouchableOpacity style={styles.container} key={Props.id}>
        <MaterialIcons name={Props.icon} color="white" size={30} />
      </TouchableOpacity>
    );
  } else if (Props.iconType == 'Feather') {
    return (
      <TouchableOpacity style={styles.container} key={Props.id}>
        <Feather name={Props.icon} color="white" size={30} />
      </TouchableOpacity>
    );
  } else if (Props.iconType == 'FontAwesome5') {
    return (
      <TouchableOpacity style={styles.container} key={Props.id}>
        <FontAwesome5 name={Props.icon} color="white" size={30} />
      </TouchableOpacity>
    );
  } else if (Props.iconType == 'MaterialCommunityIcons') {
    return (
      <TouchableOpacity style={styles.container} key={Props.id}>
        <MaterialCommunityIcons name={Props.icon} color="white" size={30} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} key={Props.id}>
      <AntDesign name={Props.icon} color="gray" size={30} />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height:50,
    width:50,
    margin:5,
    backgroundColor:'#6C141B'
  },
});
