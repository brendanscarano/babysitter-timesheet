import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { compose, withState, withHandlers } from 'recompose';
import { DataSheet } from '../../components/DataSheet';
import { NavBar } from '../../components/NavBar';
import { CalendarSider } from '../../components/CalendarSider';
import { theme } from '../../shared/theme';
import { mockData } from '../../tmpData/mockData';
import { weeksOfMonth } from '../../tmpData/mockDates';

console.log('October Weeks', weeksOfMonth(10));

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 2rem 3rem;
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
    <Layout>
      <Layout>
        <StyledContent>
          <DataSheet data={data} onCellsChanged={onCellsChanged} />
        </StyledContent>
      </Layout>
      <CalendarSider />
    </Layout>
  </Layout>
);

const Home = enhance(DumbHome);
export { Home };
