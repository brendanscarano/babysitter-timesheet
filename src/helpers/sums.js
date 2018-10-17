/**
 *
 * @param {array} kids - An array of kids being displayed in the time sheet
 * @param {string} dateString - String in format "MMDDYY" representing day to sum
 */
export const dailySum = (kids, dateString) => kids.reduce((sum, currentChild) => {
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
export const weeklySum = (kids, datesToShow) => datesToShow
  .map(dateString => dailySum(kids, dateString))
  .reduce((acc, curr) => acc + curr, 0);
