import React from 'react';

const withRole = (WrappedComponent, allowedRoles) => (props) => {
  const { role } = {
    role: 'TRIAL',
  }; // get role from state or query
  const token = window.localStorage.setItem('sid');
  if (allowedRoles.includes(role) && token) {
    return <WrappedComponent {...props} />;
  }

  return (null);
};

export const RequireSubscription = Component => withRole(Component, ['TRIAL', 'MONTHLY_PAID']); // add other subscriptions here to allow
export const RequireAccountType = Component => withRole(Component, ['TRIAL', 'MONTHLY_PAID']); // just an example of all access
