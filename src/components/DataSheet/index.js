import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

const Wrapper = styled.div`
  .data-grid-container .data-grid .cell,
  .data-grid-container .data-grid .cell.read-only,
  .data-grid-container .data-grid .empty-cell.cell.read-only {
    border: none;
    background: transparent;
  }
  .data-grid-container .data-grid .cell.read-only {
    border: none;
    width: 2rem;
  }
  .sticky-top-first-row {
    position: sticky;
    top: 0;
    border: none;
    background: whitesmoke !important;
  }
  .sticky-top-second-row {
    position: sticky;
    top: 20px;
    background: whitesmoke !important;
  }
  .sticky-top-third-row {
    position: sticky;
    top: 40px;
    background: whitesmoke !important;
  }
  .WE-ROW {
    font-weight: bold;
    color: black;
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
