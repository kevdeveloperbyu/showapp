import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CategoryCard from '../../../components/categoryCard/CategoryCard';
import { category } from '../../../components/types/types';
import ToggleCard, { ORIENTATION } from '@/components/toggle-cards/toggle-card';
import { events } from '@/assets/mocks/events';
import HomeLinear from '@/screens/linearGradients/home-linear';
import ScreenWrapper from '@/components/screen-wrapper';

const CategoriesScreen = () => {
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
    <HomeLinear>
      <ScreenWrapper
        style={{ marginTop: 80 }}
      >
        <View style={styles.categoryView}>
          <ToggleCard title='Conciertos Musicales' subtitle='Ver mas' items={events} mode={ORIENTATION.VERTICAL} columns={1} />
          <ToggleCard title='Teatros' subtitle='Ver mas' items={events} mode={ORIENTATION.VERTICAL} columns={1} />
          <ToggleCard title='Museos' subtitle='Ver mas' items={events} mode={ORIENTATION.VERTICAL} columns={1} />
          
          {categoriesList.map(category => {
            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                icon={category.icon}
                iconType={category.iconType}
              />
            );
          })}
        </View>
      </ScreenWrapper>
    </HomeLinear >
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#2E364C',
  },
  categoryView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // backgroundColor: '#2E364C',
    marginBottom: 100
  },
  textInfo: {
    color: 'white',
    textAlign: 'center',
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    width: '60%',
    alignSelf: 'center'
  }
});
