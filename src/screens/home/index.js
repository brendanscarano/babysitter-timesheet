import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import {
  compose, withState, withHandlers,
} from 'recompose';
import moment from 'moment';
import { Mutation, Query } from 'react-apollo';
import { DataSheet } from '../../components/DataSheet';
import { NavBar } from '../../components/NavBar';
import { CalendarSider } from '../../components/CalendarSider';
import { theme } from '../../shared/theme';
import { buildDatasheet } from '../../helpers/buildDatasheet';
import { CREATE_DATE_MUTATION, FETCH_USER_QUERY } from './graphql';
import { mapQueryToKids } from './mapQueryToKids';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 2rem 3rem;
  background-color: ${theme.colors.white};
`;

const Home = () => (
  <Mutation
    mutation={CREATE_DATE_MUTATION}
    refetchQueries={() => {
      return [{
        query: FETCH_USER_QUERY
      }]
    }}
  >
    {(createDate, data) => {
      return <Inner createDate={createDate} />
    }}
  </Mutation>
)


class Inner extends React.PureComponent {
  state = {
    monthToView: moment().format('YYYY-MM')
  }

  onCellsChanged = (changes) => {
    const change = changes[0];
    console.log('change', change)
    const { month, number, year, dayOfWeek, formattedDate } = change.cell.day;

    this.props.createDate({
      variables: {
        childId: change.cell.childId,
        month: parseFloat(formattedDate.slice(0, 2)),
        day: parseFloat(number),
        year: parseFloat(year),
        dayOfWeek,
        hours: parseFloat(change.value),
        dateObjectId: formattedDate
      }
    });
  };

  onCalendarMonthClick = (value) => {
      const formattedDate = moment(value).format('YYYY-MM');
      this.setState({ monthToView: formattedDate });
  }

  render() {
        return (
          <Layout>
            <NavBar />
            <Layout>
              <Query query={FETCH_USER_QUERY}>
                {((props) => {
                  console.log('query props', props)
                  if (props.loading) {
                    return <div>Loading...</div>;
                  }

                  if (
                    !props.data
                    || !props.data.user
                    || !props.data.user.children) {
                    return <div>Something went wrong</div>;
                  }

                  const children = mapQueryToKids(props.data.user.children);
                  const data = buildDatasheet(children, this.state.monthToView);

                  return (
                    <>
                      <Layout>
                        <StyledContent>
                          <DataSheet data={data} onCellsChanged={this.onCellsChanged} />
                        </StyledContent>
                      </Layout>
                      <CalendarSider onCalendarMonthClick={this.onCalendarMonthClick} />
                    </>
                  );
                })}
              </Query>
            </Layout>
          </Layout>
        )
  }
}

export { Home };
