import React from 'react';
import Responsive from 'react-responsive';

const breakpoints = ['700px', '972px', '1200px', '1800px'];

const [small, medium] = breakpoints.map(breakPoint => parseInt(breakPoint, 10));

export const Small = props => <Responsive {...props} maxWidth={small - 1} />;
export const AboveSmall = props => <Responsive {...props} minWidth={small} />;
export const BelowMedium = props => (
  <Responsive {...props} maxWidth={medium - 1} />
);
export const AboveMedium = props => <Responsive {...props} minWidth={medium} />;
export const BelowLarge = props => (
  <Responsive {...props} maxWidth={medium - 1} />
);
export const Mobile = props => <Responsive {...props} maxWidth={small} />;
export const Tablet = props => (
  <Responsive {...props} minWidth={small} maxWidth={medium} />
);
export const Desktop = props => <Responsive {...props} minWidth={medium + 1} />;
