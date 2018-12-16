import gql from 'graphql-tag';

export const CREATE_NEW_CHILD = gql`
  mutation CreateSitte(
    $firstName: String!,
    $lastName: String!,
    # $birthday: DateTime,
    $gender: Gender!,
    $rateAmount: Float!,
    $rateType: RateType!,
) {
  createSitte(
    firstName: $firstName,
    lastName: $lastName,
    gender: $gender,
    rateAmount: $rateAmount,
    rateType: $rateType,
  ) {
    firstName
    lastName
  }
}
`;
