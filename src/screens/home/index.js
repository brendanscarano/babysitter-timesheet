import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { compose, withState, withHandlers } from 'recompose';
import { DataSheet } from '../../components/DataSheet';
import { NavBar } from '../../components/NavBar';
import { CalendarSider } from '../../components/CalendarSider';
import { theme } from '../../shared/theme';
import { MAGGIE, JOHNNY } from '../../tmpData/mockChildren';
import { buildDatasheet } from '../../helpers/buildDatasheet';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 2rem 3rem;
  background-color: ${theme.colors.white};
`;

const enhance = compose(
  withState('data', 'setData', []),
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
const DumbHome = ({ data, onCellsChanged }) => {
  const testData = buildDatasheet([MAGGIE, JOHNNY], '2018-09');
  // console.log('testData', testData);
  return (
    <Layout>
      <NavBar />
      <Layout>
        <Layout>
          <StyledContent>
            <DataSheet data={testData} onCellsChanged={onCellsChanged} />
          </StyledContent>
        </Layout>
        <CalendarSider />
      </Layout>
    </Layout>
  );
};

const Home = enhance(DumbHome);
export { Home };
