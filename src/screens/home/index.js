import React from 'react';
import styled from 'styled-components';
import { Button, Layout } from 'antd';
import { DataSheet } from '../../components/DataSheet';
import { NavBar } from '../../components/NavBar';
import { theme } from '../../shared/theme';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: calc(1rem + ${theme.heights.navBar}px) 3rem;
  background-color: ${theme.colors.white};
`;

const Home = () => (
  <Layout>
    <NavBar />
    <StyledContent>
        Babysitter Time Sheet
      <Button>Click Me</Button>
      <DataSheet />
    </StyledContent>
  </Layout>
);

export { Home };
