import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'antd';
import { totalPaidPerchild } from '../buildYearlyTotals';

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  flex: 0 0 28%;
  :not(:last-child) {
    margin: 1rem 1rem 1rem 0rem;
  }
  margin: 1rem 0rem 1rem 0rem;
  .ant-card-head,
  .ant-card-body {
    display: flex;
    justify-content: center;
  }
`;

const Hours = styled.span`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const SitteeCard = ({ sitteeName, gender, children }) => (
  <StyledCard
    title={(
      <Header>
        <div>{gender === 'MALE' ? '👦' : '👧'}</div>
        <div>{sitteeName}</div>
      </Header>
    )}
  >
    {children}
  </StyledCard>
);

export const TotalPerChildSitteeCard = ({ name, ...props }) => {
  const { gender, dates, rateAmount } = props;

  return (
    <SitteeCard sitteeName={name} gender={gender}>
      <p>
        Yearly total-to-date:
        {' '}
        <Hours>{totalPaidPerchild(dates, rateAmount)}</Hours>
      </p>
    </SitteeCard>
  );
};
SitteeCard.propTypes = {
  sittee: PropTypes.string,
};

export default SitteeCard;
