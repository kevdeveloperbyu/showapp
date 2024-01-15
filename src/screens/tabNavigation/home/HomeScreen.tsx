import {
  StyleSheet,
} from 'react-native';
import React from 'react';
import { moderateScale } from '../../../utils/scaleMetrics';
import HomeLinear from '../../linearGradients/home-linear';

import { HomeTabScreenProps } from '../../../types/navigator-types';
import ScreenWrapper from '@/components/screen-wrapper';
import { events } from '@/assets/mocks/events'
import ToggleCard, { ORIENTATION } from '@/components/toggle-cards/toggle-card';

function HomeScreen({ eventsList, navigation }: HomeTabScreenProps) {
  // const {
  //   colors: { brandSecondary },
  // } = useAppTheme();

  return (
    <HomeLinear>
      <ScreenWrapper
        // withScrollView={false}
        style={{ marginTop: 80 }}
      >
        <ToggleCard title='Nuevos eventos' subtitle='Ver mas' items={events} />
      </ScreenWrapper>
    </HomeLinear >

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  optionsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: -300
    // backgroundColor: '#6C141B',
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
    height: 5,
    width: 50,
    margin: 5,
    // backgroundColor: '#6C141B'
  },
});