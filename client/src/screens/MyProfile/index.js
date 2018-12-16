import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Bar } from 'react-chartjs';
import { Avatar, Card, Layout } from 'antd';
import { FlexRow } from '../../components/Flex';
import { buildYearlyTotals } from './buildYearlyTotals';
import { theme } from '../../shared/theme';
import { formatCurr } from '../../helpers/formatCurr';
import { StyledPageLayoutWithFixedHeader } from '../../components/StyledPageLayout';
import { Payment } from '../../components/Payment';
import { ME_QUERY } from '../../graphql/queries/ME_QUERY';

export const FETCH_USER_QUERY = gql`
  {
    me {
      firstName
      lastName
    }
  }
`;

const Graph = ({ loading, error, data }) => {
  if (loading) {
    return (<div>Loading Data...</div>);
  }
  if (error) {
    return (<div>There was an error loading the data...</div>);
  }
  return (
    <Bar
      data={data}
      height="250"
      options={{
        responsive: true,
        maintainAspectRatio: false,
        titleFontColor: 'red',
        tooltips: {
          callbacks: {
            label: (toolTipItem, data) => {
              console.log('toolTipItem, data', toolTipItem, data);
              return 'Oh hello...';
            },
          },
        },
      }}
    />
  );
};


const Wrapper = styled.div`
  padding: 2rem 3rem;
  height: calc(100vh - ${theme.heights.navBar}px);
`;

const UserName = styled.h2`
    margin: 0 0 0 .5rem;
`;

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
        <Layout>
          <StyledPageLayoutWithFixedHeader>
            <Fragment>
              <TitleBar>
                <Avatar icon="user" />
                <UserName>{`Hello, ${me.firstName} ${me.lastName}`}</UserName>
              </TitleBar>
              <p>{`You are currently on a ${me.type} account`}</p>
              <Payment user={me} />
            </Fragment>
            <Query query={FETCH_USER_QUERY}>
              {((props) => {
                const childrenData = (props.data && props.data.user && props.data.user.children.length > 0) ? props.data.user.children : null;
                const annualData = buildYearlyTotals(childrenData);
                console.log('annualData', annualData);

                const annualAnnualSum = annualData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

                return (
                  <Wrapper>
                    <Card title={`2018 Total: ${formatCurr(annualAnnualSum)}`}>
                      <Graph
                        loading={props.loading
                          || (props.data && props.data.user && props.data.user.children.length === 0)}
                        error={props.error}
                        data={annualData}
                      />
                    </Card>
                  </Wrapper>
                );
              })}
            </Query>
          </StyledPageLayoutWithFixedHeader>
        </Layout>
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
