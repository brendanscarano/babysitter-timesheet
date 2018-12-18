import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Mutation, Query } from 'react-apollo';
import { buildDatasheet } from '../../helpers/buildDatasheet';
import { monthlyTotalAllChildren } from '../../helpers/buildDatasheet/sums';
import { formatDateForUrl } from '../../helpers/formatDateForUrl';
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
        fetchPolicy: 'no-cache',
      },
    ]}
  >
    {(createOrUpdateDate) => {
      if (!props.match.params.date) {
        return <Redirect to={`/sheet/${formatDateForUrl}`} />;
      }

      const [month, year] = props.match.params.date.split('-');
      const monthToView = moment(`${year}-${month}-01`).format('YYYY-MM');

      return (
        <Inner createOrUpdateDate={createOrUpdateDate} monthToView={monthToView} {...props} />
      );
    }}
  </Mutation>
);

class Inner extends React.PureComponent {
  state = {
    /** TODO: SET MONTH TO VIEW BASED ON PROPS */
    monthToView: this.props.monthToView,
  };

  componentDidUpdate(prevProps) {
    const { monthToView } = this.props;
    if (monthToView !== prevProps.monthToView) {
      this.setState({ monthToView });
    }
  }

  onCellsChanged = (changes) => {
    changes.forEach((change) => {
      const {
        number, year, dayOfWeek, formattedDate,
      } = change.cell.row;
      const { savedDateInDb } = change.cell;
      console.log('savedDateInDb', savedDateInDb);

      this.props.createOrUpdateDate({
        variables: {
          dateId: savedDateInDb ? savedDateInDb.dateId : '',
          dateObjectId: formattedDate,
          childId: change.cell.childId,
          month: parseFloat(formattedDate.slice(0, 2)),
          day: parseFloat(number),
          year: parseFloat(year),
          hours: parseFloat(change.value) || 0,
          dayOfWeek,
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

    this.props.createOrUpdateDate({
      variables: {
        dateId: savedDateInDb ? savedDateInDb.dateId : '',
        dateObjectId: formattedDate,
        childId,
        month: parseFloat(formattedDate.slice(0, 2)),
        day: parseFloat(number),
        year: parseFloat(year),
        hours: 0,
        dayOfWeek,
        // TODO: Toggle true or false
        isFixedRate: !isChecked,
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
        <Query query={FETCH_USER_QUERY} fetchPolicy="no-cache">
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
              || !props.data.me
              || !props.data.me.sittes) {
              return <div>Something went wrong</div>;
            }

            const [month, year] = moment(this.state.monthToView).format('MM YY').split(' ');
            const monthlyTotal = monthlyTotalAllChildren(props.data.me.sittes, parseInt(month), parseInt(year));

            const sittes = props.data.me.sittes.length > 0
              ? mapQueryToKids(props.data.me.sittes)
              : [];

            const data = props.data.me.sittes.length > 0
              ? buildDatasheet(sittes, this.state.monthToView, this.onFixedCheckboxChange)
              : [];

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
