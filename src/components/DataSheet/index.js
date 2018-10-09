import React from 'react';
import PropTypes from 'prop-types';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

const formatCurr = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const DataSheet = ({ data, onCellsChanged }) => console.log('data', data) || (
  <ReactDataSheet
    data={data}
    valueRenderer={cell => (cell.format === 'curr' ? formatCurr.format(cell.value) : cell.value)}
    onCellsChanged={changes => onCellsChanged(changes)}
  />
);

DataSheet.propTypes = {
  // TODO: Fill out this object
  data: PropTypes.array.isRequired,
};

export { DataSheet };
