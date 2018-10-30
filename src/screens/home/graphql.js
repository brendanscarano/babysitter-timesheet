import gql from 'graphql-tag';

export const FetchUser = gql`
    query {
	    user(where: {
            id: "cjntestdudeug0a54rjlfk74x"
        }) {
            firstName
            lastName
            children {
                firstName
                rateAmount
                dates {
                    month
                    day
                    year
                    hours
                    paid
                }
            }
        }
    }
`;
