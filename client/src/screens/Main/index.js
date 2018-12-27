import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin } from 'antd';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Mutation, Query } from 'react-apollo';
import { buildDatasheet } from '../../helpers/buildDatasheet';
import { monthlyTotalAllChildren } from '../../helpers/buildDatasheet/sums';
import { formatDateForUrl } from '../../helpers/formatDateForUrl';
import { GET_SITTES, CREATE_OR_UPDATE_DATE_MUTATION } from './graphql';
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
        query: GET_SITTES,
        variables: {
          fetchPolicy: 'no-cache',
        },
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
        <Query query={GET_SITTES} fetchPolicy="no-cache">
          {((props) => {
            if (props.loading) {
              return (
                <LoadingWrapper>
                  <Spin size="large" />
                  <span>Loading...</span>
                </LoadingWrapper>
              );
            }

            if (!props.data || !props.data.sittes) {
              return <div>Something went wrong</div>;
            }

            const { sittes } = props.data;

            const [month, year] = moment(this.state.monthToView).format('MM YY').split(' ');
            const monthlyTotal = monthlyTotalAllChildren(sittes, parseInt(month), parseInt(year));

            const mappedSittes = sittes.length > 0
              ? mapQueryToKids(sittes)
              : [];

            const data = mappedSittes.length > 0
              ? buildDatasheet(mappedSittes, this.state.monthToView, this.onFixedCheckboxChange)
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

Main.propTypes = {
  sittes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    rateAmount: PropTypes.number,
    rateType: PropTypes.oneOf(['HOURLY', 'FLAT']),
    gender: PropTypes.oneOf(['MALE', 'FEMALE']),
    dates: PropTypes.shape({
      id: PropTypes.string,
      month: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      day: PropTypes.number,
      year: PropTypes.number,
      hours: PropTypes.number,
      paid: PropTypes.bool,
      dateObjectId: PropTypes.string,
      isFixedRate: PropTypes.bool,
    }),
  })),
};

Main.defaultProps = {
  sittes: [],
};

export default Main;
