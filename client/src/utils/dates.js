import Month from 'calendar-months';
import moment from 'moment';

export const getDayArrayByDate = (date) => {
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

    return days;
  });
};
