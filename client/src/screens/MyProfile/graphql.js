import gql from 'graphql-tag';

export const FETCH_USER_QUERY = gql`
    query {
	    user(where: {
            id: "cjntestdudeug0a54rjlfk74x"
        }) {
            firstName
            lastName
            children {
                id
                firstName
                rateAmount
                dates(where: {
                    year: 18
                }) {
                    month
                    year
                    hours
                    paid
                }
            }
        }
    }
`;
