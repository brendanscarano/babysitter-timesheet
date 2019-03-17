import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import { FlexColumn } from '../Flex';

const Wrap = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  height: 90vh;
  > * {
    font-weight: 400;
    color: rgba(0,0,0,0.4);
  }
`;

export const Loader = () => (
  <Wrap>
    <Spin size="large" />
    <h2>Loading...</h2>
  </Wrap>
);
