import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SubscribeUser from '../../components/SubscribeUser/index';
import { FlexRow } from '../../components/Flex';
import { ME_QUERY } from '../../graphql/queries/ME_QUERY';

const TitleBar = styled(FlexRow)`
  margin-bottom: 2rem;
`;

const MyProfile = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) {
        return 'Loading...';
      }

      if (error) {
        return 'Something went wrong';
      }

      const { me } = data;

      return (
        <Fragment>
          <TitleBar>
            <h2>{`Hello, ${me.firstName} ${me.lastName}`}</h2>
          </TitleBar>
          <p>{`You are currently on a ${me.type} account`}</p>
          <SubscribeUser />
        </Fragment>
      );
    }}
  </Query>
);

MyProfile.propTypes = {
  me: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    type: PropTypes.oneOf('TRIAL', 'MONTHLY_PAID'),
  }).isRequired,
};

export default MyProfile;
