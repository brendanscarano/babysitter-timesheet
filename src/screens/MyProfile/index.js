import React from 'react';
import styled from 'styled-components';
import { Avatar, Card, Layout } from 'antd';
import { Query } from 'react-apollo';
import { Bar } from 'react-chartjs';
import { FETCH_USER_QUERY } from './graphql';
import { NavBar } from '../../components/NavBar';
import { FlexRow } from '../../components/Flex';
import { buildYearlyTotals } from './buildYearlyTotals';

const Wrapper = styled.div`
  padding: 2rem 3rem;
`;

const UserName = styled.h2`
    margin: 0 0 0 .5rem;
`;

const Graph = ({ loading, error, data }) => {
  if (loading) {
    return (<div>Loading Data...</div>);
  }
  if (error) {
    return (<div>There was an error loading the data...</div>);
  }
  return (
    <Bar data={data} width="1000" height="250" />
  );
};

const MyProfile = () => (
  <Layout>
    <NavBar />
    <Layout>
      <Query query={FETCH_USER_QUERY}>
        {((props) => {
          const childrenData = (props.data && props.data.user && props.data.user.children.length > 0) ? props.data.user.children : null;
          const annualData = buildYearlyTotals(childrenData);

          const annualAnnualSum = annualData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);


          return (
            <Wrapper>
              <FlexRow>
                <Avatar icon="user" />
                <UserName>Brendan Scarano</UserName>
              </FlexRow>

              <Card title={`2018 Total: ${annualAnnualSum}`}>
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
    </Layout>
  </Layout>
);

export { MyProfile };
