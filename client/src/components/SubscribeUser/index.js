import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { Button } from 'antd';
import StripeCheckout from 'react-stripe-checkout';
import { ME_QUERY } from '../../graphql/queries/ME_QUERY';

const CHANGE_CARD_MUTATION = gql`
  mutation ChangeCreditCardMutation($source: String!, $ccLast4: String!) {
    changeCreditCard(source: $source, ccLast4: $ccLast4) {
      id
    }
  }
`;
const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CreateSubscriptionMutation($source: String!, $ccLast4: String!) {
    createSubscription(source: $source, ccLast4: $ccLast4) {
      id
    }
  }
`;

export const SubscribeUser = ({ changeCreditCard, email }) => (
  <Mutation
    mutation={!changeCreditCard ? CREATE_SUBSCRIPTION_MUTATION : CHANGE_CARD_MUTATION}
    refetchQueries={[{
      query: ME_QUERY,
    }]}
    awaitRefetchQueries
  >
    {mutate => (
      <StripeCheckout
        allowRememberMe
        currency="USD"
        description="Sitter Sheet Monthly Membership" // the pop-in header subtitle
        image="/ssBaby.png" // the pop-in header image (default none)
        amount={800}
        email={email}
        token={async token => mutate({
          variables: { source: token.id, ccLast4: token.card.last4 },
        })}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        {
          !changeCreditCard
            ? <Button type="primary">Pay with Stripe</Button>
            : <Button type="dashed">Change payment info</Button>
        }
      </StripeCheckout>
    )}
  </Mutation>
);

SubscribeUser.propTypes = {
  changeCreditCard: PropTypes.bool,
  email: PropTypes.string.isRequired,
};

SubscribeUser.defaultProps = {
  changeCreditCard: false,
};

const CANCEL_SUBSCRIPTION_MUTATION = gql`
  mutation CancelSubscriptionMutation {
    cancelSubscription {
      type
    }
  }
`;

export const CancelUser = () => (
  <Mutation
    mutation={CANCEL_SUBSCRIPTION_MUTATION}
    refetchQueries={[{
      query: ME_QUERY,
    }]}
    awaitRefetchQueries
  >
    {mutate => (
      <Button type="danger" onClick={() => mutate()}>Cancel Subscription</Button>
    )}
  </Mutation>
);
