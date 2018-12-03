import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'antd';
import { DataSheet } from '../../components/DataSheet';
import { MonthPicker } from '../../components/MonthPicker';
import { FlexRow } from '../../components/Flex';
import { theme } from '../../shared/theme';
import { formatCurr } from '../../helpers/formatCurr';
// import { dataSheetModel } from '../../shared/models';
const TOP_BAR_HEIGHT = 64;

const { Content } = Layout;

const StyledContent = styled(Content)`
  height: calc(100vh - ${theme.heights.navBar}px);
  overflow: scroll;
  padding: 0 3rem;
  margin-top: calc(${theme.heights.navBar}px + 2rem);
  background-color: ${theme.colors.background};
`;

const TopBar = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
  height: ${TOP_BAR_HEIGHT}px;
  background-color: ${theme.colors.dataSheetBackground};
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 1rem;
  border: 1px solid ${theme.colors.dataSheetBackground};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const DateWrapper = styled(FlexRow)`
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
`;

const SheetsWrapper = styled(FlexRow)`
  background-color: ${theme.colors.dataSheetBackground};
  padding: 0 1rem;
`;

const Presentation = ({
  onCalendarMonthClick,
  monthToView,
  monthlyTotal,
  data,
  onCellsChanged,
}) => {
  const leftPanel = data.map(array => array.slice(0, 4));
  const rightPanel = data.map(array => array.slice(4));

  return (
    <Layout style={{ backgroundColor: theme.colors.background }}>
      <StyledContent>
        <TopBar>
          <DateWrapper>
            <MonthPicker
              onCalendarMonthClick={onCalendarMonthClick}
              monthToView={monthToView}
            />
            <h3>
Monthly Total:
              {' '}
              <b>{formatCurr(monthlyTotal)}</b>
            </h3>
          </DateWrapper>
        </TopBar>
        <SheetsWrapper>
          <DataSheet
            data={leftPanel}
            onCellsChanged={onCellsChanged}
            topBarHeight={TOP_BAR_HEIGHT}
          />

          <DataSheet
            data={rightPanel}
            onCellsChanged={onCellsChanged}
            topBarHeight={TOP_BAR_HEIGHT}
          />
        </SheetsWrapper>
      </StyledContent>
    </Layout>
  );
};

Presentation.propTypes = {
  onCalendarMonthClick: PropTypes.func.isRequired,
  // YYYY-MM
  monthToView: PropTypes.string.isRequired,
  monthlyTotal: PropTypes.number.isRequired,
  // data: dataSheetModel,
  onCellsChanged: PropTypes.func.isRequired,
};

export { Presentation };
