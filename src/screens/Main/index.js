import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import moment from 'moment';
import { Mutation, Query } from 'react-apollo';
import { DataSheet } from '../../components/DataSheet';
import { NavBar } from '../../components/NavBar';
import { MonthPicker } from '../../components/MonthPicker';
import { theme } from '../../shared/theme';
import { buildDatasheet } from '../../helpers/buildDatasheet';
import { CREATE_OR_UPDATE_DATE_MUTATION, FETCH_USER_QUERY } from './graphql';
import { mapQueryToKids } from './mapQueryToKids';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 2rem 3rem;
  background-color: ${theme.colors.white};
`;

const Main = (props) => (
  <Mutation
    mutation={CREATE_OR_UPDATE_DATE_MUTATION}
    refetchQueries={() => {
      return [{
        query: FETCH_USER_QUERY
      }]
    }}
  >
    {(upsertDate) => {
      return <Inner upsertDate={upsertDate} {...props} />
    }}
  </Mutation>
)


class Inner extends React.PureComponent {
  state = {
    /** TODO: SET MONTH TO VIEW BASED ON PROPS */
    monthToView: moment().format('YYYY-MM')
  }

  componentDidMount() {
    console.log('this.props', this.props);
  }

  onCellsChanged = (changes) => {
    changes.forEach(change => {
      const { number, year, dayOfWeek, formattedDate } = change.cell.day;
      const { savedDateInDb } = change.cell;

      this.props.upsertDate({
        variables: {
          dateId: savedDateInDb ? savedDateInDb.dateId : "",
          childId: change.cell.childId,
          month: parseFloat(formattedDate.slice(0, 2)),
          day: parseFloat(number),
          year: parseFloat(year),
          hours: parseFloat(change.value) || 0,
          dayOfWeek,
          dateObjectId: formattedDate
        }
      });
    })
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
                  console.log('children', children)
                  const data = buildDatasheet(children, this.state.monthToView);

                  return (
                    <>
                      <Layout>
                        <StyledContent>
                          <MonthPicker onCalendarMonthClick={this.onCalendarMonthClick} />
                          <DataSheet data={data} onCellsChanged={this.onCellsChanged} />
                        </StyledContent>
                      </Layout>
                    </>
                  );
                })}
              </Query>
            </Layout>
          </Layout>
        )
  }
}

export { Main };
