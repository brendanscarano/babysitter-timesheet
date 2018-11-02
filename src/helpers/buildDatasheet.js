import React from 'react';
import { Link } from 'react-router-dom';
import flattenDeep from 'lodash.flattendeep';
import Month from 'calendar-months';
import moment from 'moment';
import { dailySum, weeklySum } from './sums';

const PLACEHOLDER_SPACE = { value: ' ', readOnly: true, id: 'space' };
const STICKY_TOP_FIRST_ROW = 'sticky-top-first-row';
const STICKY_TOP_SECOND_ROW = 'sticky-top-second-row';
const STICKY_TOP_THIRD_ROW = 'sticky-top-third-row';

const BASE_HEADERS = ['Day', 'Month', '#', 'Total', ''];
const HEADERS_PER_KID = ['Hours per day', 'Paid/day', 'Notes', ' '];
const WEEK_ENDING_ROW = 'week-ending-row';

/**
 *
 * @param {array} kids
 * @param {number} date 'YYYY-MM'
 */
export const buildDatasheet = (kids, date) => {
  const targetMonthNumber = date.slice(-2);
  const weeks = Month.create(date).calendarWeeks();

  const daysInWeeks = weeks.map((week) => {
    const monthOnFirstDayOfWeek = week[0].format('MM');
    const monthOnLastDayOfWeek = week[6].format('MM');
    if (monthOnFirstDayOfWeek !== targetMonthNumber && monthOnLastDayOfWeek !== targetMonthNumber) {
      return [];
    }

    const days = week.map((day) => {
      const [dayOfWeek, month, monthNumber, number, year, formattedDate] = moment(day).format('ddd MMM MM DD YY MMDDYY').split(' ');
      return {
        dayOfWeek, month, monthNumber, number, year, formattedDate,
      };
    });

    const formattedDaysInWeek = days.map(day => day.formattedDate);
    const lastDay = days[days.length - 1];

    console.log('days', days);
    // CREATE WEEK ENDING ROWS
    return [
      ...days,
      {
        id: WEEK_ENDING_ROW,
        text: `WE ${lastDay.month} ${lastDay.number} Total`,
        value: weeklySum(kids, formattedDaysInWeek),
      },
      // PLACEHOLDER_SPACE,
    ];
  });

  const HEADERS = [...BASE_HEADERS, ...flattenDeep(kids.map(() => HEADERS_PER_KID))].map(
    text => ({ value: text, readOnly: true, className: STICKY_TOP_THIRD_ROW }),
  );

  return [
    // FIRST ROW: Names with Links to Child Pages
    [
      { ...PLACEHOLDER_SPACE, colSpan: 4, className: STICKY_TOP_FIRST_ROW },
      PLACEHOLDER_SPACE,
      ...flattenDeep(kids.map(({ info }) => [
        {
          value: info.name,
          colSpan: 3,
          readOnly: true,
          valueViewer: () => (
            <Link to={`/child/${info.id}`}>
              <span role="img" aria-label="child-emoji">{info.gender === 'MALE' ? '👦 ' : '👧 '}</span>
              {info.name}
            </Link>
          ),
          className: STICKY_TOP_FIRST_ROW,
        },
      ])),
    ],
    // SECOND ROW: Rates per child
    [
      { ...PLACEHOLDER_SPACE, colSpan: 4, className: STICKY_TOP_SECOND_ROW },
      PLACEHOLDER_SPACE,
      ...flattenDeep(kids.map(({ info }) => [{
        value: `$${info.rate}/hr`,
        colSpan: 3,
        readOnly: true,
        className: STICKY_TOP_SECOND_ROW,
      }, PLACEHOLDER_SPACE])),
    ],
    // THIRD ROW: Headings for each columns
    HEADERS,
    // N ROWS: Individual days each with the hours/rate for each child
    /**
       * day: IDay -> created by the time function above
       * IDay {
       *  dayOfWeek: "Sun"
       *  month: "Dec"
       *  number: "02"
       *  year: "18"
       *  formattedDate: "120818"
       * }
       */

    ...flattenDeep(daysInWeeks).map(day => (day.id !== WEEK_ENDING_ROW ? [
      {
        value: day.dayOfWeek,
        readOnly: true,
        type: 'dayOfWeek',
        className: 'empty-cell',
      },
      {
        value: day.month, readOnly: true, type: 'month', className: 'empty-cell',
      },
      {
        value: day.number, readOnly: true, type: 'dayOfMonth', className: 'empty-cell',
      },
      { value: dailySum(kids, day.formattedDate), readOnly: true, format: 'curr' },
      PLACEHOLDER_SPACE,
      ...flattenDeep(kids.map(({ info, dates }) => [
        {
          value: dates[day.formattedDate] ? dates[day.formattedDate].hours : 0,
          type: 'hours',
          childId: info.id,
          day,
          savedDateInDb: dates[day.formattedDate],
        },
        {
          value: dates[day.formattedDate] ? (info.rate * dates[day.formattedDate].hours) : 0, type: 'paid', id: info.id, formattedDate: day.formattedDate, format: 'curr', readOnly: true,
        },
        {
          value: dates[day.formattedDate] ? dates[day.formattedDate].notes : '', type: 'notes', id: info.id, formattedDate: day.formattedDate,
        },
        PLACEHOLDER_SPACE,
      ])),
    ]
      : [
        {
          value: day.text, colSpan: 3, readOnly: true,
        },
        {
          value: day.value, readOnly: true, format: 'curr',
        },
        PLACEHOLDER_SPACE,
        // TODO: FOR EVERY CHILD WEEKLY HOURS SUM AND WEEKLY PAID SUM
      ]
    )),
  ];
};
