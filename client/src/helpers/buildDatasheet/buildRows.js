import Month from 'calendar-months';
import moment from 'moment';
import flattenDeep from 'lodash.flattendeep';
import { weeklySumAllChildren, weeklyHourSumOneChild, weeklyProfitSumOneChild } from './sums';

const WEEK_ENDING_ROW = 'week-ending-row';
const PLACEHOLDER_SPACE = { value: ' ', readOnly: true, id: 'space' };

/**
 *
 * @param {array} kids
 * @param {string} date 'YYYY-MM'
 * returns array of length 8 each representing rows for that week
 * Each day of week represented in object containing
 * { dayOfWeek, formattedDate, month, monthNumber, number, year }
 * ie:
 * { "Sun", "112518", "Nov", "11", "25", "18" }
 * Plus one object for Week Ending values
 */
export const buildRows = (kids, date) => {
  const targetMonthNumber = date.slice(-2);

  const weeks = Month.create(date).calendarWeeks();

  return weeks.map((week) => {
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
    // const lastDay = days[days.length - 1];

    // CREATE WEEK ARRAYS WITH 7 DAYS + WEEK ENDING ROWS
    return [
      ...days,
      [
        {
          id: WEEK_ENDING_ROW,
          columns: [
            // PLACEHOLDER DAY OF WEEK NAME
            { value: 'WE', readOnly: true, className: 'WE-ROW' },
            // PLACEHOLDER MONTH
            { value: 'Total', readOnly: true, className: 'WE-ROW' },
            // PLACEHOLDER DAY OF WEEK NUMBER
            PLACEHOLDER_SPACE,
            // PLACEHOLDER DAILY TOTAL
            {
              value: weeklySumAllChildren(kids, formattedDaysInWeek), readOnly: true, format: 'curr', className: 'WE-ROW',
            },
            // PLACEHOLDER SPACE
            PLACEHOLDER_SPACE,
            ...flattenDeep(kids.map(kid => [
              {
                value: weeklyHourSumOneChild(kid, week),
                readOnly: true,
                className: 'WE-ROW',
              },
              {
                value: weeklyProfitSumOneChild(kid, week),
                format: 'curr',
                readOnly: true,
                className: 'WE-ROW',
              },
              PLACEHOLDER_SPACE,
              PLACEHOLDER_SPACE,
            ])),
          ],
        },
      ],
    ];
  });
};
