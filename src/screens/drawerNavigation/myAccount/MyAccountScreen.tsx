import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {verticalScale, moderateScale} from '../../../utils/scaleMetrics';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {authServices} from '../../../services';

const MyAccountScreen = ({user, navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginRight: 20}}
        onPress={() => navigation.navigate('Home')}>
        <AntDesign name="closecircleo" color={'black'} size={30} />
      </TouchableOpacity>
      <Text style={styles.mainText}>My Account</Text>
      <Text>{user.name}</Text>
      <View style={styles.imgBlock}>
        <Image style={styles.img} />
        <TouchableOpacity style={styles.btnBlock}>
          <Text style={styles.text}>Update photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.inputBlock}>
          <Text style={styles.text}>Name:</Text>
          <TextInput style={styles.input} placeholder={user.name}></TextInput>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.text}>email:</Text>
          <TextInput style={styles.input} placeholder={user.email}></TextInput>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.text}>Birthday:</Text>
          <TextInput
            style={styles.input}
            placeholder={user.birthday}></TextInput>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.text}>Telephone</Text>
          <TextInput
            style={styles.input}
            placeholder={user.telephone}></TextInput>
        </View>
        <TouchableOpacity style={styles.btnBlock}>
          <Text style={styles.text}>Edit Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBlock}>
          <Text style={styles.text}>Update</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.btnBlock}
        onPress={() => authServices.logOut()}>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBlock}>
        <Text style={styles.text}>Delete account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imgBlock: {
    padding: 5,
    height: verticalScale(180),
    width: '90%',
    backgroundColor: '#2E364C',
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  img: {
    width: moderateScale(120),
    height: verticalScale(100),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 100,
  },
  infoBlock: {
    backgroundColor: '#2E364C',
    margin: 10,
    padding: 10,
    borderRadius: 15,
    paddingTop: 30,
    width: '90%',
  },
  labelBlock: {},
  inputBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  btnBlock: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#6C141B',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: moderateScale(180),
    height: verticalScale(30),
    margin: 5,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
});
