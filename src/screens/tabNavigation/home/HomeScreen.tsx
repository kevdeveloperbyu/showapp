import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import Card from '../../../components/eventCard/Card';
import { category, event } from '../../../components/types/types';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from '../../../utils/scaleMetrics';
import Category from '../../../components/category/Category';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HomeScreen({ eventsList, navigation, route }) {
  console.log(eventsList);

  const categoriesList: Array<category> = [
    {
      id: 1,
      name: 'Sports',
      description: 'Football, soccer, basketball and more.',
      icon: 'sports-soccer',
      iconType: 'MaterialIcons',
    },
    {
      id: 2,
      name: 'Music',
      description: 'Football, soccer, basketball and more.',
      icon: 'music',
      iconType: 'Feather',
    },
    {
      id: 3,
      name: 'Theather',
      description: 'Football, soccer, basketball and more.',
      icon: 'theater-masks',
      iconType: 'FontAwesome5',
    },
    {
      id: 4,
      name: 'Cinema',
      description: 'Football, soccer, basketball and more.',
      icon: 'movie',
      iconType: 'MaterialCommunityIcons',
    },
    {
      id: 5,
      name: 'Cars Events',
      description: 'Football, soccer, basketball and more.',
      icon: 'car',
      iconType: 'AntDesign',
    },
    {
      id: 6,
      name: 'Museums',
      description: 'Football, soccer, basketball and more.',
      icon: 'museum',
      iconType: 'MaterialIcons',
    },
    {
      id: 7,
      name: 'Festivals',
      description: 'Football, soccer, basketball and more.',
      icon: 'festival',
      iconType: 'MaterialIcons',
    },
    {
      id: 8,
      name: 'Talks',
      description: 'Football, soccer, basketball and more.',
      icon: 'microphone-alt',
      iconType: 'FontAwesome5',
    },
    {
      id: 9,
      name: 'Others',
      description: 'Football, soccer, basketball and more.',
      icon: 'park',
      iconType: 'MaterialIcons',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.optionsBlock}>
        <TouchableHighlight style={styles.option}>
          <Text style={styles.optionText}>Virtual</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.option}>
          <Text style={styles.optionText}>Physical</Text>
        </TouchableHighlight>
      </View>
      <ScrollView horizontal={true} style={{ height: 80, backgroundColor: 'black', padding: 3 }}>
        {
          categoriesList.map(
            category => {
              return (
                <Category
                  key={category.id}
                  id={category.id} name={category.name} description={category.description} icon={category.icon} iconType={category.iconType} />)
            }
          )
        }

      </ScrollView>

      <ScrollView
        style={{ backgroundColor: '#6C141B', display: 'flex', marginBottom: 215, paddingTop: 5 }}>
        {eventsList.map((event: event) => {
          return (
            <Card
              key={event.id}
              img={event.img}
              id={event.id}
              cost={event.cost}
              type={event.type}
              description={event.description}
              artist={event.artist}
              city={event.city}
              date={event.date}
              nav={navigation}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  optionsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#6C141B',
  },
  option: {
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 3,
    borderColor: 'blue',
    backgroundColor: 'black',
    borderRadius: 5,
    width: moderateScale(90),
  },
  optionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    height: 50,
    width: 50,
    margin: 5,
    backgroundColor: '#6C141B'
  },
});
