import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'antd';

const Header = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

const StyledCard = styled(Card)`
flex: 0 0 46%;
:not(:last-child) {
    margin: 1rem 1rem 1rem 0rem;
}
margin: 1rem 0rem 1rem 0rem;
    .ant-card-head, .ant-card-body {
        display: flex;
        justify-content: center;
    }
`;

const InfoCard = ({ info, hours }) => (
  <StyledCard title={(
    <Header>
      <div>{hours ? 'Average Hours Per Month' : 'Average Total Per Month'}</div>
    </Header>
  )}
  >
    <div>{hours ? `${info}` : `$${info}`}</div>
  </StyledCard>

);

InfoCard.propTypes = {
  info: PropTypes.string,
};

export default InfoCard;
