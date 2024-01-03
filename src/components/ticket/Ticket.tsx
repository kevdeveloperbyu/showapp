import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {ticketProps} from '../types/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale, verticalScale } from '../../utils/scaleMetrics';

const Ticket = ({
  type,
  link,
  img,
  name,
  artist,
  date,
  hour,
  status,
}: ticketProps) => {
  if (type == 'online') {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(`Go to ${link}`)}
        style={styles.card}>
        <View>
          <Image source={{uri: img}} style={styles.img} />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.mainText}>{name}</Text>
          <Text style={styles.text}>{artist}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{hour}</Text>
          <Text style={styles.text}>{status}</Text>
        </View>
        <AntDesign name="caretright" color="white" size={60} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('Go to physical event')}
        style={styles.card}>
        <View>
          <Image source={{uri: img}} style={styles.img} />
        </View>
        <View>
          <View style={styles.textBlock}>
            <Text style={styles.mainText}>{name} </Text>
            <Text style={styles.text}>{artist} </Text>
            <Text style={styles.text}>{date} </Text>
            <Text style={styles.text}>{hour} </Text>
            <Text style={styles.text}>{status} </Text>
          </View>
        </View>

        <AntDesign name="caretright" color="white" size={60} />
      </TouchableOpacity>
    );
  }
};

export default Ticket;

const styles = StyleSheet.create({
  img: {
    width: moderateScale(60),
    height: verticalScale(60),
    borderRadius:20
  },
  card: {
    flexDirection: 'row',
    backgroundColor:'#2E364C',
    width:'90%',
    padding:15,
    borderRadius:20,
    margin:5,
    justifyContent:'center',
    alignItems:'center'
  },
  textBlock:{
    marginHorizontal:moderateScale(30)
  },
  mainText:{
    color:'white',
    fontWeight:'bold',
    fontSize:15
  },
  text:{
    color:'white',
    fontSize:12,
  }

});
