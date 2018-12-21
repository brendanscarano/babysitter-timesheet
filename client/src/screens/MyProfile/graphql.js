import gql from 'graphql-tag';

export const GET_SITTES = gql`{
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
}`;
