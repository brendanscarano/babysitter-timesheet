import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import {
  compose, withState, withHandlers, withProps, lifecycle,
} from 'recompose';
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
  withState('kids', 'setKids', [MAGGIE, JOHNNY]),
  withState('monthToView', 'setMonthToView', moment().format('YYYY-MM')),
  lifecycle({
    async componentDidMount() {
      console.log('mounted, mock fetch');
    },
  }),
  withHandlers({
    onCellsChanged: ({ kids, setKids }) => (changes) => {
      const firstChange = changes[0];
      const { cell, value } = firstChange;

      const kidToUpdate = kids.filter(kid => kid.info.id === firstChange.cell.id)[0];

      // They already have data for this specific date
      if (kidToUpdate.dates[cell.formattedDate]) {
        kidToUpdate.dates[cell.formattedDate].hours = value;
        kidToUpdate.dates[cell.formattedDate].paid = parseInt(value, 10) * kidToUpdate.info.rate;
      } else {
        kidToUpdate.dates[cell.formattedDate] = {
          id: cell.formattedDate,
          date: moment(cell.formattedDate).format('ddd MMM D'),
          hours: parseInt(value, 10),
          paid: parseInt(value, 10) * kidToUpdate.info.rate,
          notes: '',
        };
      }

      setKids(kids.map(kid => (kid.info.id === firstChange.cell.id ? kidToUpdate : kid)));
    },
    onCalendarMonthClick: ({ setMonthToView }) => (value) => {
      const formattedDate = moment(value).format('YYYY-MM');
      setMonthToView(formattedDate);
    },
  }),
  withProps(props => ({
    data: buildDatasheet(props.kids, props.monthToView),
  })),
);
const DumbHome = ({
  data, onCellsChanged, onCalendarMonthClick,
}) => (
  <Layout>
    <NavBar />
    <Layout>
      <Layout>
        <StyledContent>
          <DataSheet data={data} onCellsChanged={onCellsChanged} />
        </StyledContent>
      </Layout>
      <CalendarSider onCalendarMonthClick={onCalendarMonthClick} />
    </Layout>
  </Layout>
);

const Home = enhance(DumbHome);
export { Home };
