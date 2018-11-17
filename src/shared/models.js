import PropTypes from 'prop-types';

// Top Header Row
const PlaceholderSpaceLong = PropTypes.shape({
  value: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  colSpan: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
});

const PlaceholderSpace = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool.isRequired,
  format: PropTypes.string,
  id: PropTypes.string,
});

const ChildNameSpace = PropTypes.shape({
  value: PropTypes.string.isRequired,
  colSpan: PropTypes.number.isRequired,
  readOnly: PropTypes.bool.isRequired,
  valueViewer: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
});

const ChildRateSpace = PropTypes.shape({
  value: PropTypes.string.isRequired,
  colSpan: PropTypes.number.isRequired,
  readOnly: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
});

const DayMonthTotalRowSpace = PropTypes.shape({
  value: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
});

export const dataSheetModel = PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
  PlaceholderSpaceLong,
  PlaceholderSpace,
  ChildNameSpace,
  ChildRateSpace,
  DayMonthTotalRowSpace,
]))).isRequired;
