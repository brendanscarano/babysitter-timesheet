import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, Card, Layout } from 'antd';
import { FlexRow } from '../../components/Flex';
import { buildYearlyTotals, calculateAvgHrsPerMonth } from './buildYearlyTotals';
import { formatCurr } from '../../helpers/formatCurr';
import { Payment } from '../../components/Payment';
import { ME_QUERY } from '../../graphql/queries/ME_QUERY';
import { GET_SITTES } from './graphql';
import Graph from './profileComponents/Graph';
import { TotalPerChildSitteeCard } from './profileComponents/SitteeCard';
import InfoCard from './profileComponents/InfoCard';
import { Loader } from '../../components/Loader';

const DataSheetWrapper = styled.div`
  padding: 2rem 0;
`;

const CardWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: 2rem 0rem 2rem 0rem;
  justify-content: space-between;
`;

const UserName = styled.h2`
  margin: 0 0 0 0.5rem;
`;

const TopRow = styled(FlexRow)`
  justify-content: space-between;
`;

const TitleBar = styled(FlexRow)`
  margin-bottom: 2rem;
`;

const MyProfile = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) {
        return <Loader />;
      }

      if (error) {
        return 'Something went wrong';
      }

      const { me } = data;

      return (
        <Layout style={{ backgroundColor: '#fff' }}>
          <TopRow>
            <TitleBar>
              <Avatar icon="user" />
              <UserName>
                {me.firstName}
                {' '}
                {me.lastName}
              </UserName>
            </TitleBar>
            <div>
              <p>{`You are currently on a ${me.type} account`}</p>
              <Payment user={me} />
            </div>
          </TopRow>
          <Query query={GET_SITTES}>
            {(props) => {
              const sitteData = data.sittes && data.sittes.length > 0 ? data.sittes : null;
              const annualData = buildYearlyTotals(sitteData);
              const annualAnnualSum = annualData.datasets[0].data.reduce(
                (acc, curr) => acc + curr,
                0,
              );

              return (
                <DataSheetWrapper>
                  <Card title={`2018 Total: ${formatCurr(annualAnnualSum)}`}>
                    <Graph loading={loading} error={error} data={annualData} />
                  </Card>
                  <CardWrapper>
                    {sitteData
                      && sitteData.map((sittee, i) => (
                        <TotalPerChildSitteeCard
                          key={sittee.firstName}
                          name={`${sittee.firstName} ${sittee.lastName}`}
                          {...sittee}
                        />
                      ))}
                  </CardWrapper>
                  <InfoCard info={30} hours />
                  <InfoCard info={120} hours={false} />
                </DataSheetWrapper>
              );
            }}
          </Query>
        </Layout>
      );
    }}
  </Query>
);

MyProfile.propTypes = {
  me: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    // type: PropTypes.oneOf('TRIAL', 'MONTHLY_PAID'),
  }).isRequired,
};

export default MyProfile;
