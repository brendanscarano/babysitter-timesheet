import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

const Wrapper = styled.div`
  .sticky-top-first-row {
    position: sticky;
    top: 0;
  }
  .sticky-top-second-row {
    position: sticky;
    top: 20px;
  }
  .sticky-top-third-row {
    position: sticky;
    top: 40px;
  }
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
