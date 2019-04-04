import flattenDeep from 'lodash.flattendeep';
import { emojisForMonths } from '../../shared/emojisForMonths';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const annualDateObject = data => ({
  labels: monthNames.map((monthName, idx) => `${emojisForMonths[idx]} ${monthName}`),
  datasets: [
    {
      label: '2018',
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data,
    },
  ],
});

export const allChildDatesForYear = data => flattenDeep(
  data.map(child => child.dates.map(date => ({
    ...date,
    paid: date.paid ? date.paid : date.hours * child.rateAmount,
  }))),
);

export const buildYearlyTotals = (data) => {
  const annualData2018 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (!data || data.length === 0) {
    return annualDateObject(annualData2018);
  }

  const allChildDatesForYearResults = allChildDatesForYear(data);

  allChildDatesForYearResults.forEach((date) => {
    annualData2018[date.month - 1] = annualData2018[date.month - 1] + date.paid;
  });

  return annualDateObject(annualData2018);
};

export const totalPaidPerchild = (datesArr, rate) => {
  let total = 0;
  datesArr.forEach((date) => {
    if (date.paid) {
      total += date.paid;
    }
    if (date.hours) {
      total += date.isFixedRate ? rate : rate * date.hours;
    }
  });
  return total;
};

export const calculateAvgHoursPerMonth = (data) => {
  const hoursObj = {};
  data.forEach((date) => {
    if (!(date.month in hoursObj)) {
      hoursObj[date.month] = date.hours;
    } else {
      hoursObj[date.month] += date.hours;
    }
  });
};

export const calculateAvgHrsPerMonth = (arr) => {
  let allDates = [];

  arr.forEach((sittee) => {
    allDates = allDates.concat(sittee.dates);
  });

  let allHours = 0;
  const uniqueMonth = {};
  allDates.forEach(({ hours, month }) => {
    allHours += hours;
    if (hours && uniqueMonth[month]) {
      uniqueMonth[month] += 1;
    } else if (hours && !uniqueMonth[month]) {
      uniqueMonth[month] = 1;
    }
  });

  const numOfMonths = Object.keys(uniqueMonth).length;
  return allHours / numOfMonths;
};

// const sampleData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       label: '2018',
//       fillColor: 'rgba(220,220,220,0.5)',
//       strokeColor: 'rgba(220,220,220,0.8)',
//       highlightFill: 'rgba(220,220,220,0.75)',
//       highlightStroke: 'rgba(220,220,220,1)',
//       data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
//     },
//     {
//       label: '2017',
//       fillColor: 'rgba(151,187,205,0.5)',
//       strokeColor: 'rgba(151,187,205,0.8)',
//       highlightFill: 'rgba(151,187,205,0.75)',
//       highlightStroke: 'rgba(151,187,205,1)',
//       data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 27, 90],
//     },
//   ],
// };
