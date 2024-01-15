import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ticket from '../../../components/ticket/Ticket';
import { ticketProps } from '../../../components/types/types';

const TicketsScreen = () => {
  const online_events: Array<ticketProps> = [
    {
      id: 1,
      name: 'Adictos separados',
      address: '',
      artist: 'Maná',
      date: 'Marzo 12, 2023',
      hour: '8 pm',
      link: 'https://www.youtube.com/watch?v=1IgOZaQqB58',
      status: 'Active',
      img: 'https://lh3.googleusercontent.com/KfS7bUmfaXPVuwaaLDrwQuOT-OuoL2T1hGCgU1GkNhpUYXw0BvfFhtMnx4AqfIoLN1sKPLVlqWOrEAGc=w544-h544-l90-rj',
      type: 'online',
      city: '',
    },
    {
      id: 2,
      name: 'First time in Ecuador',
      address: '',
      artist: 'Kard',
      date: 'Marzo 16, 2023',
      hour: '9 pm',
      link: 'https://www.youtube.com/watch?v=USx4WyrkfU4',
      status: 'Active',
      img: 'https://6.viki.io/image/c0976692a9a04765b9d5670bbfbd2dfe/dummy.jpeg?s=900x600&e=t',
      type: 'online',
      city: '',
    },
  ];

  const physical_events: Array<ticketProps> = [
    {
      id: 1,
      name: 'Siempre juntos',
      address: 'Coliseo Rumiñahui',
      artist: 'Juanes',
      date: 'Marzo 16, 2023',
      hour: '7 pm',
      link: '',
      status: 'Active',
      img: 'https://www.cadenadial.com/wp-content/uploads/2018/12/juanes-436x291.jpg',
      type: 'physical',
      city: 'Quito',
    },
    {
      id: 2,
      name: 'Vibra Ecuador',
      address: 'Estadio Barcelona',
      artist: 'PitBull',
      date: 'Abril 16, 2023',
      hour: '8 pm',
      link: '',
      status: 'Active',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pitbull_7%2C_2012.jpg/180px-Pitbull_7%2C_2012.jpg',
      type: 'physical',
      city: 'Guayaquil',
    },
  ];

  return (
    <View style={{ backgroundColor: '#6C141B', height: '100%' }}>
      <ScrollView>
        <View>
          <Text style={styles.mainText}>Physical Events</Text>
          <View style={styles.cardContainer}>
            {physical_events.map((event: ticketProps) => {
              return (
                <Ticket
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  artist={event.artist}
                  date={event.date}
                  hour={event.hour}
                  status={event.status}
                  img={event.img}
                  link={event.link}
                  type={event.type}
                  address={event.address}
                  city={event.city}
                />
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles.mainText}>Online Events</Text>
          <View style={styles.cardContainer}>
            {online_events.map((event: ticketProps) => {
              return (
                <Ticket
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  artist={event.artist}
                  date={event.date}
                  hour={event.hour}
                  status={event.status}
                  img={event.img}
                  link={event.link}
                  type={event.type}
                  address={event.address}
                  city={event.city}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TicketsScreen;

const styles = StyleSheet.create({
  mainText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    fontSize: 25
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  }
});
