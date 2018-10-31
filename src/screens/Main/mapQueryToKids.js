/**
interface IDate {
    month: number;
    day: number;
    year: number;
    dayOfWeek: string;
    paid: number;
    hours: number;
    paid?: number;
    dateObjectId: string;
}

interface IChild {
    id: string;
    firstName: string;
    rateAmount: number;
    dates: IDate[];
}
 */

// children: IChild[]
export const mapQueryToKids = children => children.map(child => ({
  info: {
    id: child.id,
    name: child.firstName,
    rate: child.rateAmount,
  },
  dates: child.dates.reduce((acc, curr) => ({
    ...acc,
    [curr.dateObjectId]: {
      id: curr.dateObjectId,
      date: `Day Month ${curr.day}`,
      hours: curr.hours,
      paid: curr.paid,
      notes: '',
    },
  }), {}),
}));
