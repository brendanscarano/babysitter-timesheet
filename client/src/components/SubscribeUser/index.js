import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import StripeCheckout from 'react-stripe-checkout';
import { ME_QUERY } from '../../graphql/queries/ME_QUERY';

const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CreateSubscriptionMutation($source: String!, $ccLast4: String!) {
    createSubscription(source: $source, ccLast4: $ccLast4) {
      id
      email
    }
  }
`;

export default () => (
  <Mutation mutation={CREATE_SUBSCRIPTION_MUTATION} refetchQueries={ME_QUERY} awaitRefetchQueries>
    {mutate => (
      <StripeCheckout
        token={async token => mutate({
          variables: { source: token.id, ccLast4: token.card.last4 },
        })}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      />
    )}
  </Mutation>
);
