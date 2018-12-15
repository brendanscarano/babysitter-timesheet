import gql from 'graphql-tag';

export const FETCH_USER_QUERY = gql`
  query {
    me {
      firstName
      sittes {
        id
        firstName
        rateAmount
        rateType
        gender
        dates {
            id
            month
            day
            year
            hours
            paid
            dateObjectId
            isFixedRate
        }
      }
    }
  }
`;

export const CREATE_OR_UPDATE_DATE_MUTATION = gql`
  mutation UpsertDate(
    $dateId: ID
    $childId: ID!
    $month: Float!
    $day: Float!
    $year: Float!
    $hours: Float!
    $dayOfWeek: String!
    $dateObjectId: String!
    $fixedRateChecked: Boolean
  ) {
    upsertDate(
      where: { id: $dateId }
      create: {
        owner: { connect: { id: $childId } }
        month: $month
        day: $day
        year: $year
        hours: $hours
        dayOfWeek: $dayOfWeek
        dateObjectId: $dateObjectId
        fixedRateChecked: $fixedRateChecked
      }
      update: { fixedRateChecked: $fixedRateChecked, hours: $hours }
    ) {
      id
      dateObjectId
    }
  }
`;
