import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import {
  compose, withState, withHandlers,
} from 'recompose';
import moment from 'moment';
import { Query } from 'react-apollo';
import { DataSheet } from '../../components/DataSheet';
import { NavBar } from '../../components/NavBar';
import { CalendarSider } from '../../components/CalendarSider';
import { theme } from '../../shared/theme';
import { buildDatasheet } from '../../helpers/buildDatasheet';
import { FetchUser } from './graphql';
import { mapQueryToKids } from './mapQueryToKids';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 2rem 3rem;
  background-color: ${theme.colors.white};
`;


const enhance = compose(
  withState('monthToView', 'setMonthToView', moment().format('YYYY-MM')),
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
);
const DumbHome = ({
  monthToView, onCellsChanged, onCalendarMonthClick,
}) => (
  <Layout>
    <NavBar />
    <Layout>
      <Query query={FetchUser}>
        {((props) => {
          if (props.loading) {
            return <div>Loading...</div>;
          }

          if (!props.data || !props.data.user) {
            return <div>Something went wrong</div>;
          }

          const children = mapQueryToKids(props.data);
          const data = buildDatasheet(children, monthToView);

          return (
            <>
              <Layout>
                <StyledContent>
                  <DataSheet data={data} onCellsChanged={onCellsChanged} />
                </StyledContent>
              </Layout>
              <CalendarSider onCalendarMonthClick={onCalendarMonthClick} />
            </>
          );
        })}
      </Query>
    </Layout>
  </Layout>
);

const Home = enhance(DumbHome);
export { Home };
