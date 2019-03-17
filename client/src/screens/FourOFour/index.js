import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { FlexColumn } from '../../components/Flex';

const Container = styled(FlexColumn)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const FourOFour = props => (
  <Container>
    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: 'red' }}>
        404
        {' '}
      </h1>
      <img src="//media.giphy.com/media/NV4xdWXmztuThZZ6pN/giphy.gif" alt="crybaby" />
      <h3 style={{ marginTop: '1rem' }}>page not found</h3>
    </div>
    <Button onClick={() => { props.history.goBack(); }} icon="arrow-left">Go Back</Button>
  </Container>
);

export default withRouter(FourOFour);
