import moment from 'moment';

/**
 *
 * @param {array} children - An array of children being displayed in the time sheet
 * @param {string} dateString - String in format "MMDDYY" representing day to sum
 */
export const dailySumAllChildren = (children, dateString) => children.reduce((sum, currentChild) => {
  const childTargetDate = currentChild.dates[dateString];
  if (currentChild.dates[dateString]) {
    if (currentChild.info.rateType === 'HOURLY') {
      return sum + (currentChild.info.rate * childTargetDate.hours);
    }

    if (currentChild.dates[dateString].fixedRateChecked) {
      return sum + currentChild.info.rate;
    }
  }

  return sum + 0;
}, 0);

/**
 *
 * @param {array} datesToShow - Array of dateStrings to call dailySum on each one individually
 */
export const weeklySumAllChildren = (children, datesToShow) => datesToShow
  .map(dateString => dailySumAllChildren(children, dateString))
  .reduce((acc, curr) => acc + curr, 0);

export const weeklyHourSumOneChild = (child, daysInWeek) => daysInWeek.reduce((sum, currDay) => {
  const formattedDay = moment(currDay).format('MMDDYY');
  return sum + (child.dates[formattedDay] ? child.dates[formattedDay].hours : 0);
}, 0);


export const weeklyProfitSumOneChild = (child, daysInWeek) => daysInWeek.reduce((sum, currDay) => {
  const formattedDay = moment(currDay).format('MMDDYY');
  if (child.dates[formattedDay]) {
    if (child.info.rateType === 'HOURLY') {
      return sum + (child.info.rate * child.dates[formattedDay].hours);
    }

    if (child.dates[formattedDay].fixedRateChecked) {
      return sum + child.info.rate;
    }
  }

  return sum + 0;
}, 0);
