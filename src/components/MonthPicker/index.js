import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const { MonthPicker: MonthDatePicker } = DatePicker;

const emojiForMonth = ['❄️', '💌', '🍀', '🌧', '🌻', '✏️', '🎇', '☀️', '🏫', '🎃', '🦃', '🎄'];

const MonthPicker = ({ onCalendarMonthClick }) => (
  <MonthDatePicker
    format="MMM YYYY"
    onChange={onCalendarMonthClick}
    monthCellContentRender={value => (
      <p>
        {emojiForMonth[moment(value).format('M') - 1]}
        {' '}
        {moment(value).format('MMM')}
      </p>
    )}
  />
);

export { MonthPicker };
