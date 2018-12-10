import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Mutation, Query } from 'react-apollo';
import { buildDatasheet } from '../../helpers/buildDatasheet';
import { monthlyTotalAllChildren } from '../../helpers/buildDatasheet/sums';
import { CREATE_OR_UPDATE_DATE_MUTATION, FETCH_USER_QUERY } from './graphql';
import { mapQueryToKids } from './mapQueryToKids';
import { Presentation } from './Presentation';
import { theme } from '../../shared/theme';

const LoadingWrapper = styled.div`
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  > span {
    margin-top: 1rem;
  }
`;

const Main = props => (
  <Mutation
    mutation={CREATE_OR_UPDATE_DATE_MUTATION}
    refetchQueries={() => [
      {
        query: FETCH_USER_QUERY,
      },
    ]}
  >
    {(upsertDate) => {
      if (!props.match.params.date) {
        const dateToRedirect = moment().format('MM-YYYY');
        return <Redirect to={`/${dateToRedirect}`} />;
      }

      const [month, year] = props.match.params.date.split('-');
      const monthToView = moment(`${year}-${month}-01`).format('YYYY-MM');

      return (
        <Inner upsertDate={upsertDate} monthToView={monthToView} {...props} />
      );
    }}
  </Mutation>
);

class Inner extends React.PureComponent {
  state = {
    /** TODO: SET MONTH TO VIEW BASED ON PROPS */
    monthToView: this.props.monthToView,
  };

  componentDidUpdate(prevProps, _) {
    const { monthToView } = this.props;
    if (monthToView !== prevProps.monthToView) {
      this.setState({ monthToView });
    }
  }

  onCellsChanged = (changes) => {
    const { upsertDate } = this.props;

    changes.forEach((change) => {
      const {
        number, year, dayOfWeek, formattedDate,
      } = change.cell.row;
      const { savedDateInDb } = change.cell;

      upsertDate({
        variables: {
          dateId: savedDateInDb ? savedDateInDb.dateId : '',
          childId: change.cell.childId,
          month: parseFloat(formattedDate.slice(0, 2)),
          day: parseFloat(number),
          year: parseFloat(year),
          hours: parseFloat(change.value) || 0,
          dayOfWeek,
          dateObjectId: formattedDate,
        },
      });
    });
  };

  onFixedCheckboxChange = rowData => (e) => {
    const {
      childId,
      year,
      formattedDate,
      number,
      dayOfWeek,
      savedDateInDb,
      isChecked,
    } = rowData;
    const { upsertDate } = this.props;
    upsertDate({
      variables: {
        dateId: savedDateInDb ? savedDateInDb.dateId : '',
        childId,
        month: parseFloat(formattedDate.slice(0, 2)),
        day: parseFloat(number),
        year: parseFloat(year),
        hours: 0,
        dayOfWeek,
        dateObjectId: formattedDate,
        // TODO: Toggle true or false
        fixedRateChecked: !isChecked,
      },
    });
  };

  onCalendarMonthClick = (value) => {
    const { history } = this.props;
    const formattedDate = moment(value).format('MM-YYYY');
    history.push(`/sheet/${formattedDate}`);
  };

  render() {
    return (
      <>
        <Query query={FETCH_USER_QUERY}>
          {((props) => {
            if (props.loading) {
              return (
                <LoadingWrapper>
                  <Spin size="large" />
                  <span>Loading...</span>
                </LoadingWrapper>
              );
            }

            if (
              !props.data
              || !props.data
              || !props.data.sittes) {
              return <div>Something went wrong</div>;
            }

            const [month, year] = moment(this.state.monthToView).format('MM YY').split(' ');
            const monthlyTotal = monthlyTotalAllChildren(props.data.sittes, parseInt(month), parseInt(year));

            const children = mapQueryToKids(props.data.sittes);

            const data = buildDatasheet(children, this.state.monthToView, this.onFixedCheckboxChange);
            return (
              <Presentation
                onCalendarMonthClick={this.onCalendarMonthClick}
                monthToView={this.state.monthToView}
                monthlyTotal={monthlyTotal}
                data={data}
                onCellsChanged={this.onCellsChanged}
              />
            );
          })}
        </Query>
      </>
    );
  }
}

export default Main;
