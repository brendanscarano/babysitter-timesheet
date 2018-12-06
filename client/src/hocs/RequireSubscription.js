import React from 'react';

const withRole = (WrappedComponent, allowedRoles) => (props) => {
  const { role } = {
    role: 'TRIAL',
  }; // get role from state or query

  if (allowedRoles.includes(role)) {
    return <WrappedComponent {...props} />;
  }
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
    VIP SECTION
    </div>
  );
};

export const RequireSubscription = Component => withRole(Component, ['TRIAL', 'MONTHLY_PAID']); // add other subscriptions here to allow
export const RequireAccountType = Component => withRole(Component, ['TRIAL', 'MONTHLY_PAID']); // just an example of all access
