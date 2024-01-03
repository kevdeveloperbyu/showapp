import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {category} from '../types/types';
import {moderateScale, verticalScale} from '../../utils/scaleMetrics';

const ICON = (Props: category) => {
  if (Props.iconType == 'AntDesign') {
    console.log('this is the antdesign');
    return <AntDesign name={Props.icon} color="white" size={60} />;
  } else if (Props.iconType == 'Entypo') {
    return <Entypo name={Props.icon} color="white" size={60} />;
  } else if (Props.iconType == 'MaterialIcons') {
    return <MaterialIcons name={Props.icon} color="white" size={60} />;
  } else if (Props.iconType == 'Feather') {
    return <Feather name={Props.icon} color="white" size={60} />;
  } else if (Props.iconType == 'FontAwesome5') {
    return <FontAwesome5 name={Props.icon} color="white" size={60} />;
  } else if (Props.iconType == 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={Props.icon} color="white" size={60} />;
  }
  return <AntDesign name={Props.icon} color="gray" size={60} />;
};

const CategoryCard = (Props: category) => {
  return (
    <TouchableOpacity style={styles.block}>
      <ICON
        id={Props.id}
        name={Props.name}
        description={Props.description}
        icon={Props.icon}
        iconType={Props.iconType}
      />
      <Text style={styles.textName}>{Props.name}</Text>
      <Text style={styles.textDescription}>{Props.description}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {},
  block: {
    flexDirection: 'column',
    width: moderateScale(140),
    height: verticalScale(140),
    backgroundColor: '#6C141B',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
  },
  textName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textDescription: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});
