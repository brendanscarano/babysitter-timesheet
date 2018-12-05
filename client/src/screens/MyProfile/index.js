import React from 'react';
import styled from 'styled-components';
import { Avatar, Card, Layout } from 'antd';
import { Query } from 'react-apollo';
import { Bar } from 'react-chartjs';
import { FETCH_USER_QUERY } from './graphql';
import { NavBar } from '../../components/NavBar';
import { FlexRow } from '../../components/Flex';
import { buildYearlyTotals } from './buildYearlyTotals';
import { theme } from '../../shared/theme';
import { formatCurr } from '../../helpers/formatCurr';
import SubscribeUser from '../../components/SubscribeUser/index';

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

const MyProfile = () => (
  <Layout>
    <NavBar isUserSignedIn />
    <Layout>
      <SubscribeUser />
      <Query query={FETCH_USER_QUERY}>
        {((props) => {
          const childrenData = (props.data && props.data.user && props.data.user.children.length > 0) ? props.data.user.children : null;
          const annualData = buildYearlyTotals(childrenData);
          console.log('annualData', annualData);

          const annualAnnualSum = annualData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

          return (
            <Wrapper>
              <TitleBar>
                <Avatar icon="user" />
                <UserName>Brendan Scarano</UserName>
              </TitleBar>

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
    </Layout>
  </Layout>
);

export default MyProfile;
