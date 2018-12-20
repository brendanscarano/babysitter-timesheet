import gql from 'graphql-tag';

export const CREATE_OR_UPDATE_DATE_MUTATION = gql`
  mutation CreateOrUpdateDate(
    $dateId: ID
    $dateObjectId: String!
    $childId: String!
    $month: Float!
    $day: Float!
    $year: Float!
    $hours: Float!
    $dayOfWeek: String!
    $notes: String
    $paid: String
    $isFixedRate: Boolean
  ) {
    createOrUpdateDate(
      dateId: $dateId,
      dateObjectId: $dateObjectId,
      childId: $childId,
      month: $month,
      day: $day,
      year: $year,
      hours: $hours,
      dayOfWeek: $dayOfWeek,
      notes: $notes,
      paid: $paid,
      isFixedRate: $isFixedRate
    )
  }
`;
