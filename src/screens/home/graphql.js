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
                dates {
                    month
                    day
                    year
                    hours
                    paid
                    dateObjectId
                }
            }
        }
    }
`;

export const CREATE_DATE_MUTATION = gql`
    mutation CreateDate(
        $childId: ID!
        $month: Float!,
        $day: Float!,
        $year: Float!,
        $dayOfWeek: String!,
        $hours: Float!,
        $dateObjectId: String!,
        $notes: String,
    ) {
        createDate(data: {
            owner: {
                connect: {
                id: $childId
            }
        },
        month: $month,
        day: $day,
        year: $year,
        dayOfWeek: $dayOfWeek,
        hours: $hours,
        dateObjectId: $dateObjectId,
        notes: $notes,
    }) {
        dateObjectId
    }
}`;
