import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Calendar from 'react-calendar';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    border-left: 1px solid #efefef;
`;

const StyledCalendar = styled(Calendar)`
    border: none;
`;

const CalendarSider = () => (
  <StyledSider
    width={400}
    theme="light"
    collapsible
    collapsed={false}
    reverseArrow
  >
    <StyledCalendar
      showWeekNumbers
      onClickWeekNumber={event => console.log('clicking this!', event)}
      calendarType="US"
    />
  </StyledSider>
);

export { CalendarSider };
