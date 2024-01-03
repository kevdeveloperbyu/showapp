import {Image} from 'react-native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {event} from '../types/types';
import {moderateScale, verticalScale} from '../../utils/scaleMetrics';
import analytics from '@react-native-firebase/analytics';

const Card = ({cost, type, description, artist, city, date, img, id, nav,}) => {
  return (
    <View style={styles.container} key={id}>
      <View style={styles.block}>
        <Image source={{uri: img}} style={styles.img} />
        {type === 'online' ? (
          <View style={styles.online}>
            <Text style={styles.textType}>Online</Text>
          </View>
        ) : (
          <View style={styles.onSite}>
            <Text style={styles.textType}>On Site</Text>
          </View>
        )}
        <View style={styles.costBlock}>
          <Text style={styles.textType}> {cost} USD</Text>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.infoBlock}>
          <View>
            <Text style={styles.textArtist}> {artist} </Text>
            <Text style={styles.textCity}> {city} </Text>
          </View>
          <View>
            <Text style={styles.textDate}>{date}</Text>
          </View>
        </View>
        <View style={styles.descriptionBlock}>
          <Text style={{color: 'white'}}> {description}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              console.log(`hello baby! this is my id: ${id}`);
              try {
                await analytics().logEvent('openevents_kev', {
                  id: id,
                  name: artist,
                  description: description,
                });
                console.log('succesfully added to firebase!');
                nav.navigate('My Detail Event', {
                  id,
                  cost,
                  type,
                  description,
                  artist,
                  city,
                  date,
                  img,
                });
              } catch (error) {
                console.log(error);
              }
            }}>
            <Text style={styles.textType}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  block: {
    width: '100%',
    padding: 0,
    paddingBottom: 0,
  },
  img: {
    width: '100%',
    height: verticalScale(250),
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E364C',
    width: '100%',
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  online: {
    backgroundColor: 'black',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 5,
    borderRadius: 4,
    width: moderateScale(70),
    alignItems: 'center',
  },
  onSite: {
    backgroundColor: 'black',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 5,
    borderRadius: 4,
    width: moderateScale(70),
    alignItems: 'center',
  },
  textType: {
    color: 'white',
    fontWeight: 'bold',
  },
  costBlock: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    width: moderateScale(70),
    padding: 5,
    borderRadius: 4,
  },
  btn: {
    backgroundColor: 'black',
    alignItems: 'center',
    width: moderateScale(90),
    padding: 5,
    borderRadius: 4,
    margin: 3,
    alignSelf: 'flex-end',
  },
  descriptionBlock: {
    width: moderateScale(170),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  infoBlock: {
    width: moderateScale(130),
    padding: 0,
    flexDirection: 'column',
  },
  textArtist: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textCity: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  textDate: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
