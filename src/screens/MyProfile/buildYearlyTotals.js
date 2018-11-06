import flattenDeep from 'lodash.flattendeep';

const annualDateObject = data => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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

export const buildYearlyTotals = (data) => {
  const annualData2018 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (!data || data.length === 0) {
    return annualDateObject(annualData2018);
  }

  const allChildDatesForYear = flattenDeep(data.map(child => child.dates.map(date => ({
    ...date,
    paid: date.paid ? date.paid : (date.hours * child.rateAmount),
  }))));

  allChildDatesForYear.forEach((date) => {
    annualData2018[date.month - 1] = annualData2018[date.month - 1] + date.paid;
  });
  console.log('annualData2018', annualData2018);

  return annualDateObject(annualData2018);
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
