import React from 'react';
import styled from 'styled-components';
import { Avatar, Card, Layout } from 'antd';
import { Query } from 'react-apollo';
import { Bar } from 'react-chartjs';
import { FETCH_USER_QUERY } from './graphql';
import { NavBar } from '../../components/NavBar';
import { FlexRow } from '../../components/Flex';

const Wrapper = styled.div`
  padding: 2rem 3rem;
`;

const UserName = styled.h2`
    margin: 0 0 0 .5rem;
`;

const sampleData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '2018',
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
    },
    {
      label: '2017',
      fillColor: 'rgba(151,187,205,0.5)',
      strokeColor: 'rgba(151,187,205,0.8)',
      highlightFill: 'rgba(151,187,205,0.75)',
      highlightStroke: 'rgba(151,187,205,1)',
      data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 27, 90],
    },
  ],
};

const MyProfile = () => (
  <Layout>
    <NavBar />
    <Layout>
      <Query query={FETCH_USER_QUERY}>
        {((props) => {
          if (props.loading) {
            return <Wrapper>Loading...</Wrapper>;
          }

          if (
            !props.data
            || !props.data.user
            || !props.data.user.children) {
            return <Wrapper>Something went wrong</Wrapper>;
          }

          return (
            <Wrapper>
              <FlexRow>
                <Avatar icon="user" />
                <UserName>Brendan Scarano</UserName>

              </FlexRow>

              <Card title="2018 Total: $25,845">
                <Bar data={sampleData} width="1000" height="250" />
              </Card>
            </Wrapper>
          );
        })}
      </Query>
    </Layout>
  </Layout>
);

export { MyProfile };
