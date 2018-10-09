import React from 'react';
import styled from 'styled-components';
import { Button, Layout } from 'antd';
import { compose, withState, withHandlers } from 'recompose';
import { DataSheet } from '../../components/DataSheet';
import { NavBar } from '../../components/NavBar';
import { theme } from '../../shared/theme';
import { mockData } from '../../tmpData/mockData';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: calc(1rem + ${theme.heights.navBar}px) 3rem;
  background-color: ${theme.colors.white};
`;

const enhance = compose(
  withState('data', 'setData', mockData),
  withHandlers({
    onCellsChanged: ({ data, setData }) => (changes) => {
      console.log('changes', changes);
      const firstChange = changes[0];
      const newData = [...data];
      newData[firstChange.row][firstChange.col].value = firstChange.value;
      setData(newData);
    },
  }),
);
const DumbHome = ({ data, onCellsChanged }) => (
  <Layout>
    <NavBar />
    <StyledContent>
        Babysitter Time Sheet
      <Button>Click Me</Button>
      <DataSheet data={data} onCellsChanged={onCellsChanged} />
    </StyledContent>
  </Layout>
);

const Home = enhance(DumbHome);
export { Home };
