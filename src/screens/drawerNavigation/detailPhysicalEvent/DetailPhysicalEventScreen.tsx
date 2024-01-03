import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, verticalScale} from '../../../utils/scaleMetrics';
import Carousel from 'react-native-reanimated-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailPhysicalEventScreen = ({route, navigation}) => {
  const detailEvent = {
    id: '1',
    photos: [
      {
        id: 1,
        description: 'kard and its members',
        imgUrl:
          'https://www.nacionrex.com/__export/1595098504054/sites/debate/img/2020/07/18/kard-celebra-su-tercer-aniversario_crop1595096837842.jpg_1902800913.jpg',
      },
      {
        id: 2,
        description: 'kard concert',
        imgUrl: 'https://kpopmas.com/wp-content/uploads/2021/07/kard.jpg',
      },
      {
        id: 3,
        description: 'kard girls',
        imgUrl:
          'https://0.soompi.io/wp-content/uploads/sites/8/2018/08/10213634/KARD.png?s=900x600&e=t',
      },
    ],
  };

  /* 2. Get the param */
  const {id, cost, date, description, artist, city} = route.params;
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView
      key={id}
      style={{flexDirection: 'column', backgroundColor: '#2E364C'}}>
      <View style={{}}>
      <TouchableOpacity
          style={{alignItems: 'flex-end', marginRight: 20}}
          onPress={() =>
            navigation.navigate('Home')
          }>
          <AntDesign name="closecircleo" color={'white'} size={25} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          {artist}
        </Text>
        <Carousel
          loop
          width={width}
          height={width}
          autoPlay={true}
          data={detailEvent.photos}
          scrollAnimationDuration={2500}
          //onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index, item}) => (
            <View
              style={{
                flex: 1,

                justifyContent: 'center',
              }}>
              <Image source={{uri: item.imgUrl}} style={styles.img} />
            </View>
          )}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          width: '90%',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: moderateScale(50),
          backgroundColor: '#6C141B',
          borderRadius: 10,
          marginVertical: verticalScale(10),
          borderColor: 'white',
          borderWidth: 1,
        }}>
        <View>
          <Text style={styles.textArtist}>{artist}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.textDate}>{date}</Text>
          <Text style={styles.textCity}>{city}</Text>
        </View>
        <View>
          <Text style={styles.textType}> {cost} USD </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          console.log(`Go to Pay Pal: ${id}`);
          navigation.navigate('Buy event with', {
            id,
            cost,
            date,
            description,
            artist,
            city,
          });
        }}>
        <Text style={styles.textType}> Buy now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailPhysicalEventScreen;

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
    color: 'white',
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
    fontSize: 20,
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
    justifyContent: 'center',
    alignSelf: 'center',

    height: verticalScale(40),
    width: '80%',
    padding: 5,
    borderRadius: 4,
    margin: 3,
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
