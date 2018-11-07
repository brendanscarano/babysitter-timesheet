import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { emojisForMonths } from '../../shared/emojisForMonths';

const { MonthPicker: MonthDatePicker } = DatePicker;

/**
 * @param {monthToView} string - YYYY-MM
 */
const getMonthNumber = monthToView => parseInt(moment(monthToView).format('MM'), 10);

const MonthPicker = ({ onCalendarMonthClick, monthToView }) => (
  <>
    <h2>{`${emojisForMonths[getMonthNumber(monthToView) - 1]} ${moment(monthToView).format('MMM YYYY')}`}</h2>
    <MonthDatePicker
      format="MMM YYYY"
      onChange={onCalendarMonthClick}
      monthCellContentRender={value => (
        <p>
          {emojisForMonths[moment(value).format('M') - 1]}
          {' '}
          {moment(value).format('MMM')}
        </p>
      )}
    />
  </>
);

export { MonthPicker };
