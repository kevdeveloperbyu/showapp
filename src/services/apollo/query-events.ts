import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
query GetEvents($input: inputOfGetEvent) {
  getEvents(input: $input) {
    eventCategoryID {
      categoryType
      name
      shortDescription
      longDescription
      icon
      urlImg
      _id
    }
    ticketTypeID {
      ticketTypeDetails {
        name
        description
        section
        cost
        currency
        ticketsAvailable
        _id
      }
      _id
    }
    stageID {
      address {
        city
        country
        state
        mainStreet
        numberStreet
        reference
        lat
        long
        secondStreet
        languages
        mapsURL
      }
      name
      description
      longDescription
      banners
      videoURL
      capacity
        daysOpen {
        dayOpen
        openFrom
        closeTo
      }
      onlineLink
      _id
    }
    scheduleID {
      scheduleDetails {
        dayNumber
        attendFrom
        attendTo
        _id
      }
      _id
    }
    eventDetails {
      eventName
      artistName
      shortDescription
      mainDescription
      dateEvent
      banners {
        promoVideo
        bannersUrls
        _id
      }
      videoImg
      saleStatus
      hourEvent
      urlEvent
      ticketsAvailable
      modality
      isOnline
      concertPlacesIMG
      visitorTeam
      homeTeam
      sportType
      _id
    }
  }
}
`;