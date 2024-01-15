import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Coupon from '../../../components/coupon/Coupon';
import {couponProps} from '../../../components/types/types';
import {moderateScale} from '../../../utils/scaleMetrics';

const CouponsScreen = () => {
  const cuoponsList: Array<couponProps> = [
    {
      id: 1,
      code: 'PRIMEROLONUESTRO',
      name: 'The best concert in Ecuador',
      description: 'The best national music. For free, limited quantity',
      date: 'March 8th 2023',
      hour: '10 am',
      status: 'Active',
      eventType: 'online',
      type: 'free',
      img: 'https://i.scdn.co/image/ab67616d0000b273842205443d7ebe58313ab1cf',
      quantity: 200,
      validUntil: 'February 9th 2023',
    },
    {
      id: 2,
      code: 'GOTOGETHER',
      name: 'Romantic for couples',
      description: 'Axel makes us fell the love in the air',
      date: 'January 28th 2023',
      hour: '10 am',
      status: 'Active',
      eventType: 'physical',
      type: '2x1',
      img: 'https://media.gettyimages.com/id/956203338/photo/singer-johnny-gioeli-of-axel-rudi-pell-performs-live-on-stage-during-a-concert-at-the-huxleys.jpg?s=612x612&w=gi&k=20&c=mhrr6czZs46d04Qs8DiwymAwZfe56aK4w2xuYnWn-GQ=',
      quantity: 200,
      validUntil: 'January 20th 2023',
    },
    {
      id: 3,
      code: 'GOINGROUP',
      name: 'The best concert in Seoul',
      description: 'No excuses to go with your friends',
      date: 'March 18th 2023',
      hour: '10 am',
      status: 'Active',
      eventType: 'physical',
      type: '3x2',
      img: 'https://images.indianexpress.com/2022/06/BTS1200-1.jpeg',
      quantity: 300,
      validUntil: 'February 27th 2023',
    },
    {
      id: 4,
      code: 'METAL',
      name: 'The best concert in Ecuador',
      description: 'The best national music. For free, limited quantity',
      date: 'March 8th 2023',
      hour: '10 am',
      status: 'Active',
      eventType: 'online',
      type: 'free',
      img: 'https://estaticosgn-cdn.deia.eus/clip/66571278-663f-4d64-8004-84481da377ca_16-9-aspect-ratio_default_0.jpg',
      quantity: 200,
      validUntil: 'February 9th 2023',
    },
    {
      id: 5,
      code: 'PRIMEROLONUESTRO',
      name: 'The best concert in Ecuador',
      description: 'The best national music. For free, limited quantity',
      date: 'March 8th 2023',
      hour: '10 am',
      status: 'Active',
      eventType: 'online',
      type: 'free',
      img: 'https://estaticosgn-cdn.deia.eus/clip/66571278-663f-4d64-8004-84481da377ca_16-9-aspect-ratio_default_0.jpg',
      quantity: 200,
      validUntil: 'February 9th 2023',
    },
    {
      id: 6,
      code: 'PRIMEROLONUESTRO',
      name: 'The best concert in Ecuador',
      description: 'The best national music. For free, limited quantity',
      date: 'March 8th 2023',
      hour: '10 am',
      status: 'Active',
      eventType: 'online',
      type: 'free',
      img: 'https://estaticosgn-cdn.deia.eus/clip/66571278-663f-4d64-8004-84481da377ca_16-9-aspect-ratio_default_0.jpg',
      quantity: 200,
      validUntil: 'February 9th 2023',
    },
    {
      id: 7,
      code: 'PRIMEROLONUESTRO',
      name: 'The best concert in Ecuador',
      description: 'The best national music. For free, limited quantity',
      date: 'March 8th 2023',
      hour: '10 am',
      status: 'Active',
      eventType: 'online',
      type: 'free',
      img: 'https://estaticosgn-cdn.deia.eus/clip/66571278-663f-4d64-8004-84481da377ca_16-9-aspect-ratio_default_0.jpg',
      quantity: 200,
      validUntil: 'February 9th 2023',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.promoText}>
        When you are buying add the code of the coupon and enjoy amazing
        benefits!
      </Text>
      <ScrollView>
        <View style={styles.scroll}>
          {cuoponsList.map((coupon: couponProps) => {
            return (
              <Coupon
                key={coupon.id}
                id={coupon.id}
                code={coupon.code}
                name={coupon.name}
                description={coupon.description}
                date={coupon.date}
                hour={coupon.hour}
                status={coupon.status}
                img={coupon.img}
                type={coupon.type}
                eventType={coupon.eventType}
                quantity={coupon.quantity}
                validUntil={coupon.validUntil}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CouponsScreen;

const styles = StyleSheet.create({
  promoText: {
    textAlign: 'center',
    color: 'white',
    width: '60%',
    marginBottom: 10,
    marginTop: 15,
  },
  mainContainer: {
    backgroundColor: '#6C141B',
    textAlign: 'center',
    alignItems: 'center',
  },
  scroll: {
    paddingBottom: moderateScale(200),
  },
});
