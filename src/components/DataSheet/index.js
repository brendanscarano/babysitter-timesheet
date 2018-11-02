import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

const Wrapper = styled.div`

`;

const formatCurr = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const DataSheet = ({ data, onCellsChanged }) => (
  <Wrapper>
    <ReactDataSheet
      data={data}
      valueRenderer={cell => (cell.format === 'curr' ? formatCurr.format(cell.value) : cell.value)}
      onCellsChanged={changes => onCellsChanged(changes)}
    />
  </Wrapper>
);

DataSheet.propTypes = {
  // TODO: Fill out this object
  data: PropTypes.array.isRequired,
};

export { DataSheet };
