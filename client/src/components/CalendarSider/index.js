import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { YearView } from 'react-calendar';
import moment from 'moment';
import { DatePicker } from 'antd';

const { MonthPicker } = DatePicker;
const { Sider } = Layout;

const StyledSider = styled(Sider)`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    border-left: 1px solid #efefef;
`;

const emojiForMonth = ['❄️', '💌', '🍀', '🌧', '🌻', '✏️', '🎇', '☀️', '🏫', '🎃', '🦃', '🎄'];

const CalendarSider = ({ onCalendarMonthClick }) => (
  <StyledSider
    width={400}
    theme="light"
    collapsible
    collapsed={false}
    reverseArrow
  >
    <MonthPicker
      onChange={onCalendarMonthClick}
      monthCellContentRender={value => (
        <p>
          {emojiForMonth[moment(value).format('M') - 1]}
          {' '}
          {moment(value).format('MMM')}
        </p>
      )}
    />
    <YearView
      activeStartDate={new Date(2018, 0, 1)}
      onClick={onCalendarMonthClick}
      tileContent={({ date }) => ` ${emojiForMonth[date.getMonth()]}`}
    />
  </StyledSider>
);

export { CalendarSider };
