import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, verticalScale} from '../../utils/scaleMetrics';
import {couponProps} from '../types/types';

const Coupon = ({
  id,
  code,
  date,
  name,
  description,
  img,
  type,
  eventType,
  hour,
  status,
  validUntil,
}: couponProps) => {
  return (
    <TouchableOpacity key={id} style={styles.couponBlock}>
      <View style={styles.imgBlock}>
        <Image source={{uri: img}} style={styles.img} />
        <View style={styles.codeBlock}>
          <Text style={styles.textCode}>{code}</Text>
        </View>
      </View>
      <View style={styles.descriptionBlock}>
        <View style={styles.descrip1}>
          <Text style={styles.textBold}>{name}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <View style={styles.descrip2}>
          <Text style={styles.textType}>{type}</Text>
          <Text style={styles.textBold}>Valid until: </Text>
          <Text style={styles.text}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  couponBlock: {
    width: '95%',
    backgroundColor: '#2E364C',
    margin: 5,
    alignItems: 'center',
    borderRadius: 20,
    paddingBottom: 8,
  },
  imgBlock: {},
  img: {
    width: moderateScale(290),
    height: verticalScale(160),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  codeBlock: {
    position: 'absolute',
    backgroundColor: 'black',
    right: 0,
    bottom: 0,
    padding: 4,
    borderRadius: 5,
  },
  textCode: {
    color: 'white',
  },
  descriptionBlock: {
    flexDirection: 'row',
    width: '90%',
    justifyContent:'center'
  },
  descrip1:{
    width:'50%',
    margin:5,
    padding:5
  },
  descrip2:{
    width:'40%',
    padding:5,
    margin:5
  },
  text:{
    color:'white'
  },
  textBold:{
    color:'white',
    fontWeight:'bold',
    marginBottom:5
  },
  textType:{
    color:'white',
    fontWeight:'bold',
    marginBottom:verticalScale(5),
    textAlign:'center',
    fontSize:30
  }
});
