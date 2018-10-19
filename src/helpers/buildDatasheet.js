import React from 'react';
import { Link } from 'react-router-dom';
import flattenDeep from 'lodash.flattendeep';
import Month from 'calendar-months';
import moment from 'moment';
import { dailySum, weeklySum } from './sums';

const PLACEHOLDER_SPACE = { value: ' ', readOnly: true, id: 'space' };

const BASE_HEADERS = ['Day', 'Month', '#', 'Total', ''];
const HEADERS_PER_KID = ['Hours per day', 'Paid/day', 'Notes', ' '];
const WEEK_ENDING_ROW = 'week-ending-row';

/**
 *
 * @param {array} kids
 * @param {number} date 'YYYY-MM'
 */
export const buildDatasheet = (kids, date) => {
  const weeks = Month.create(date).calendarWeeks();

  const daysInWeeks = weeks.map((week) => {
    const days = week.map((day) => {
      const [dayOfWeek, month, number, year, formattedDate] = moment(day).format('ddd MMM DD YY MMDDYY').split(' ');
      return {
        dayOfWeek, month, number, year, formattedDate,
      };
    });

    const formattedDaysInWeek = days.map(day => day.formattedDate);
    const lastDay = days[days.length - 1];
    return [...days, { id: WEEK_ENDING_ROW, text: `WE ${lastDay.month} ${lastDay.number} Total`, value: weeklySum(kids, formattedDaysInWeek) }];
  });

  const HEADERS = [...BASE_HEADERS, ...flattenDeep(kids.map(() => HEADERS_PER_KID))].map(
    text => ({ value: text, readOnly: true }),
  );

  return [
    // FIRST ROW: Names with Links to Child Pages
    [
      { ...PLACEHOLDER_SPACE, colSpan: 5 },
      ...flattenDeep(kids.map(({ info }) => [
        {
          value: info.name,
          colSpan: 3,
          valueViewer: () => (
            <Link to={`/${info.id}`}>
              <span role="img" aria-label="child-emoji">{info.gender === 'male' ? '👦 ' : '👧 '}</span>
              {info.name}
            </Link>
          ),
        },
        PLACEHOLDER_SPACE,
      ])),
    ],
    // SECOND ROW: Rates per child
    [
      { ...PLACEHOLDER_SPACE, colSpan: 5 },
      ...flattenDeep(kids.map(({ info }) => [{ value: `$${info.rate}/${info.rateTime}`, colSpan: 3 }, PLACEHOLDER_SPACE])),
    ],
    // THIRD ROW: Headings for each columns
    HEADERS,
    // N ROWS: Individual days each with the hours/rate for each child
    ...flattenDeep(daysInWeeks).map(day => (day.id !== WEEK_ENDING_ROW ? [
      { value: day.dayOfWeek, readOnly: true, type: 'dayOfWeek' },
      { value: day.month, readOnly: true, type: 'month' },
      { value: day.number, readOnly: true, type: 'dayOfMonth' },
      { value: dailySum(kids, day.formattedDate), readOnly: true, format: 'curr' },
      PLACEHOLDER_SPACE,
      ...flattenDeep(kids.map(({ info, dates }) => [
        {
          value: dates[day.formattedDate] ? dates[day.formattedDate].hours : 0, type: 'hours', id: info.id, formattedDate: day.formattedDate,
        },
        {
          value: dates[day.formattedDate] ? (info.rate * dates[day.formattedDate].hours) : 0, type: 'paid', id: info.id, formattedDate: day.formattedDate, format: 'curr',
        },
        {
          value: dates[day.formattedDate] ? dates[day.formattedDate].notes : '', type: 'notes', id: info.id, formattedDate: day.formattedDate,
        },
        PLACEHOLDER_SPACE,
      ])),
    ]
      : [{
        value: day.text, colSpan: 3, readOnly: true,
      }, { value: day.value, readOnly: true, format: 'curr' }])),
  ];
};
