import gql from 'graphql-tag';

export const GET_SITTES = gql`
	query getSittes {
		sittes {
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
