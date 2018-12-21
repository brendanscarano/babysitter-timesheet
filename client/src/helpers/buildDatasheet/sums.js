import moment from 'moment';
import flattenDeep from 'lodash.flattendeep';

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

    if (currentChild.dates[dateString].isFixedRate) {
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

/**
 * If child is HOURLY, Sums the total hours worked per week per child
 * If child is FLAT, Sums the total days worked per week per child
 */
export const weeklyHourSumOneChild = (child, daysInWeek) => daysInWeek.reduce((sum, currDay) => {
  const formattedDay = moment(currDay).format('MMDDYY');

  if (child.info.rateType === 'HOURLY') {
    return sum + (child.dates[formattedDay] ? child.dates[formattedDay].hours : 0);
  }

  return sum + (child.dates[formattedDay] && child.dates[formattedDay].isFixedRate ? 1 : 0);
}, 0);


export const weeklyProfitSumOneChild = (child, daysInWeek) => daysInWeek.reduce((sum, currDay) => {
  const formattedDay = moment(currDay).format('MMDDYY');
  if (child.dates[formattedDay]) {
    if (child.info.rateType === 'HOURLY') {
      return sum + (child.info.rate * child.dates[formattedDay].hours);
    }

    if (child.dates[formattedDay].isFixedRate) {
      return sum + child.info.rate;
    }
  }

  return sum + 0;
}, 0);


/**
 *
 * @param {array} children - dates from initial graphql call
 * @param {number} month - 11
 * @param {number} year - 18
 */
export const monthlyTotalAllChildren = (children, month, year) => {
  const allChildrensMonthDays = flattenDeep(children.map((child) => {
    const dates = child.dates || [];
    return dates
      .filter(date => date.month === month && date.year === year)
      .map(date => ({
        ...date,
        paid: (() => {
          if (date.paid) {
            return date.paid;
          }
          if (child.rateType === 'HOURLY') {
            return date.hours * child.rateAmount;
          }
          if (date.isFixedRate) {
            return child.rateAmount;
          }
          return 0;
        })(),
      }));
  }));

  return allChildrensMonthDays.reduce((acc, curr) => acc + curr.paid, 0);
};
