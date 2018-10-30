export const mapQueryToKids = (graphqlQueryData) => {
  const { children } = graphqlQueryData.user;
  return children.map(child => ({
    info: {
      name: child.firstName,
      rate: child.rateAmount,
    },
    dates: child.dates.reduce((acc, curr) => ({
      ...acc,
      [`${curr.month}${curr.day}18`]: {
        id: `${curr.month}${curr.day}18`,
        date: `Day Month ${curr.day}`,
        hours: curr.hours,
        paid: curr.paid,
        notes: '',
      },
    }), {}),
  }));
};
