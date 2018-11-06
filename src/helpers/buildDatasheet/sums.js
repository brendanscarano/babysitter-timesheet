import moment from 'moment';

/**
 *
 * @param {array} kids - An array of kids being displayed in the time sheet
 * @param {string} dateString - String in format "MMDDYY" representing day to sum
 */
export const dailySumAllKids = (kids, dateString) => kids.reduce((sum, currentChild) => {
  const childTargetDate = currentChild.dates[dateString];
  if (currentChild.dates[dateString]) {
    return sum + (currentChild.info.rate * childTargetDate.hours);
  }

  return sum + 0;
}, 0);

/**
 *
 * @param {array} datesToShow - Array of dateStrings to call dailySum on each one individually
 */
export const weeklySumAllKids = (kids, datesToShow) => datesToShow
  .map(dateString => dailySumAllKids(kids, dateString))
  .reduce((acc, curr) => acc + curr, 0);


export const weeklyHourSumOneKid = (kid, daysInWeek) => daysInWeek.reduce((sum, currDay) => {
  const formattedDay = moment(currDay).format('MMDDYY');
  return sum + (kid.dates[formattedDay] ? kid.dates[formattedDay].hours : 0);
}, 0);

export const weeklyProfitSumOneKid = (kid, daysInWeek) => daysInWeek.reduce((sum, currDay) => {
  const formattedDay = moment(currDay).format('MMDDYY');
  return sum + (kid.dates[formattedDay] ? kid.info.rate * kid.dates[formattedDay].hours : 0);
}, 0);
