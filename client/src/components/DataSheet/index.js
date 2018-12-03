import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

const Wrapper = styled.div`
  * tr > td > span {
    height: 20px;
  }
  .data-grid-container .data-grid .cell,
  .data-grid-container .data-grid .cell.read-only,
  .data-grid-container .data-grid .empty-cell.cell.read-only {
    border: none;
    background: transparent;
  }
  .data-grid-container .data-grid .cell.read-only {
    border: none;
    width: 2rem;
    height: 26px;
  }
  .sticky-top-first-row {
    position: sticky;
    top: ${({ topBarHeight }) => topBarHeight}px;
    border: none;
    background: whitesmoke !important;
    z-index: 2;
  }
  .sticky-top-second-row {
    position: sticky;
    top: ${({ topBarHeight }) => topBarHeight + 26}px;
    background: whitesmoke !important;
    z-index: 2;
  }
  .sticky-top-third-row {
    position: sticky;
    top: ${({ topBarHeight }) => topBarHeight + 52}px;
    background: whitesmoke !important;
    z-index: 2;
  }
  .WE-ROW {
    font-weight: bold;
    color: black;
    font-style: italic;
    text-align: left;
  }
`;

const formatCurr = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const DataSheet = ({ data, onCellsChanged, topBarHeight }) => (
  <Wrapper topBarHeight={topBarHeight}>
    <ReactDataSheet
      data={data}
      valueRenderer={cell => (cell.format === 'curr' ? formatCurr.format(cell.value) : cell.value)}
      onCellsChanged={changes => onCellsChanged(changes)}
      rowRenderer={(rowProps) => {
        if (rowProps.row === 0 || rowProps.row === 1 || rowProps.row === 2) {
          return (<tr>{rowProps.children}</tr>);
        }
        return (<tr style={{ height: '28px', backgroundColor: 'white' }}>{rowProps.children}</tr>);
      }}
    />
  </Wrapper>
);

DataSheet.propTypes = {
  // TODO: Fill out this object
  data: PropTypes.array.isRequired,
  onCellsChanged: PropTypes.func.isRequired,
  /** Height of the bar with the date picker, and monthly total that is also sticky */
  topBarHeight: PropTypes.number.isRequired,
};

export { DataSheet };
