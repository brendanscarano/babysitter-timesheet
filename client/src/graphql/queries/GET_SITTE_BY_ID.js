import gql from 'graphql-tag';

export const GET_SITTE_BY_ID = gql`
	query getSitteById($where: SitteWhereUniqueInput!) {
		sitte(where: $where) {
			id
			firstName
			lastName
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
				notes
			}
		}
	}
`;
