import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { DatePicker } from 'antd';
import { emojisForMonths } from '../../shared/emojisForMonths';

const { MonthPicker: MonthDatePicker } = DatePicker;

const Wrapper = styled.div`

`;

/**
 * @param {monthToView} string - YYYY-MM
 */
// const getMonthNumber = monthToView => parseInt(moment(monthToView).format('MM'), 10);

const MonthPicker = ({ onCalendarMonthClick, monthToView }) => (
  <Wrapper>
    {/* <h2>{`${emojisForMonths[getMonthNumber(monthToView) - 1]} ${moment(monthToView).format('MMM YYYY')}`}</h2> */}
    <MonthDatePicker
      format="MMM YYYY"
      onChange={onCalendarMonthClick}
      value={moment(monthToView)}
      monthCellContentRender={value => (
        <p>
          {emojisForMonths[moment(value).format('M') - 1]}
          {' '}
          {moment(value).format('MMM')}
        </p>
      )}
    />
  </Wrapper>
);

export { MonthPicker };
