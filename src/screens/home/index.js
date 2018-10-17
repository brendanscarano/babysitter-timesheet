import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { compose, withState, withHandlers } from 'recompose';
import moment from 'moment';
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
  withState('monthToView', 'setMonthToView', moment().format('YYYY-MM')),
  withHandlers({
    onCellsChanged: ({ data, setData }) => (changes) => {
      console.log('changes', changes);
      const firstChange = changes[0];
      const newData = [...data];
      newData[firstChange.row][firstChange.col].value = firstChange.value;
      setData(newData);
    },
    onCalendarMonthClick: ({ setMonthToView }) => (value) => {
      const formattedDate = moment(value).format('YYYY-MM');
      console.log('formattedDate', formattedDate);
      setMonthToView(formattedDate);
    },
  }),
);
const DumbHome = ({
  data, monthToView, onCellsChanged, onCalendarMonthClick,
}) => {
  console.log('monthToView', monthToView);
  const testData = buildDatasheet([MAGGIE, JOHNNY], monthToView);
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
        <CalendarSider onCalendarMonthClick={onCalendarMonthClick} />
      </Layout>
    </Layout>
  );
};

const Home = enhance(DumbHome);
export { Home };
