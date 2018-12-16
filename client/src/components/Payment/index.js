import React from 'react';
import styled from 'styled-components';
import { SubscribeUser, CancelUser } from '../SubscribeUser';
import { FlexRow } from '../Flex';

const Row = styled(FlexRow)`
  > {
    &:first-child {
      margin-right: 0.5rem;
    }
  }
`;

export const Payment = ({ user }) => (
  <div>
    {
      (user.type && user.type === 'MONTHLY_PAID')
        ? (
          <Row>
            <SubscribeUser email={user.email} changeCreditCard />
            <CancelUser />
          </Row>
        )
        : <SubscribeUser email={user.email} />
    }
  </div>
);
