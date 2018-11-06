import React from 'react';
import { Link } from 'react-router-dom';
import flattenDeep from 'lodash.flattendeep';
import { dailySumAllKids } from './sums';
import { buildRows } from './buildRows';

const PLACEHOLDER_SPACE = { value: ' ', readOnly: true, id: 'space' };
const PLACEHOLDER_SPACE_STICKY = {
  value: ' ', readOnly: true, id: 'space', className: 'sticky',
};
const STICKY_TOP_FIRST_ROW = 'sticky-top-first-row';
const STICKY_TOP_SECOND_ROW = 'sticky-top-second-row';
const STICKY_TOP_THIRD_ROW = 'sticky-top-third-row';

const BASE_HEADERS = ['Day', 'Month', '#', 'Total', ''];
const HEADERS_PER_KID = ['Hours per day', 'Paid/day', 'Notes', ' '];
const WEEK_ENDING_ROW = 'week-ending-row';

/**
 *
 * @param {array} kids
 * @param {string} date 'YYYY-MM'
 */
export const buildDatasheet = (kids, date) => {
  const rowsInTable = buildRows(kids, date);
  console.log('rowsInTable', rowsInTable);

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
        PLACEHOLDER_SPACE_STICKY,
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

    ...flattenDeep(rowsInTable).map(row => (row.id !== WEEK_ENDING_ROW
      // NON WEEK ENDING ROW
      ? [
        {
          value: row.dayOfWeek,
          readOnly: true,
          type: 'dayOfWeek',
          className: 'empty-cell',
        },
        {
          value: row.month, readOnly: true, type: 'month', className: 'empty-cell',
        },
        {
          value: row.number, readOnly: true, type: 'dayOfMonth', className: 'empty-cell',
        },
        { value: dailySumAllKids(kids, row.formattedDate), readOnly: true, format: 'curr' },
        PLACEHOLDER_SPACE,
        ...flattenDeep(kids.map(({ info, dates }) => [
          {
            value: dates[row.formattedDate] ? dates[row.formattedDate].hours : 0,
            type: 'hours',
            childId: info.id,
            row,
            savedDateInDb: dates[row.formattedDate],
          },
          {
            value: dates[row.formattedDate] ? (info.rate * dates[row.formattedDate].hours) : 0, type: 'paid', id: info.id, formattedDate: row.formattedDate, format: 'curr', readOnly: true,
          },
          {
            value: dates[row.formattedDate] ? dates[row.formattedDate].notes : '', type: 'notes', id: info.id, formattedDate: row.formattedDate,
          },
          PLACEHOLDER_SPACE,
        ])),
      ]
      // WEEK ENDING ROW
      : [
        ...row.columns,
      ]
    )),
  ];
};
