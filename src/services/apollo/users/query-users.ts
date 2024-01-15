import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
query GetUsers {
  getUsers {
    name
    lastName
    firebaseID
    email
    status
    birthday
    role
    telephone
    fullAddress
    country
    city
    gender
    profileImg
  }
}
`