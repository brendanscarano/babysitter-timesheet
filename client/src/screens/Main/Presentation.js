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
  margin: 2rem 0;
  background-color: ${theme.colors.background};
`;

const TopBar = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
  height: ${TOP_BAR_HEIGHT}px;
  background-color: ${theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const DateWrapper = styled(FlexRow)`
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
`;

const Presentation = ({
  onCalendarMonthClick,
  monthToView,
  monthlyTotal,
  data,
  onCellsChanged,
}) => (
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
      <DataSheet
        data={data}
        onCellsChanged={onCellsChanged}
        topBarHeight={TOP_BAR_HEIGHT}
      />
    </StyledContent>
  </Layout>
);

Presentation.propTypes = {
  onCalendarMonthClick: PropTypes.func.isRequired,
  // YYYY-MM
  monthToView: PropTypes.string.isRequired,
  monthlyTotal: PropTypes.number.isRequired,
  // data: dataSheetModel,
  onCellsChanged: PropTypes.func.isRequired,
};

export { Presentation };
