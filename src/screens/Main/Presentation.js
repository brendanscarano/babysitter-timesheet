import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'antd';
import { DataSheet } from '../../components/DataSheet';
import { MonthPicker } from '../../components/MonthPicker';
import { FlexRow, FlexColumn } from '../../components/Flex';
import { theme } from '../../shared/theme';
import { formatCurr } from '../../helpers/formatCurr';
// import { dataSheetModel } from '../../shared/models';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 2rem 3rem;
  background-color: ${theme.colors.white};
`;

const TopBar = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
`;

const DateWrapper = styled(FlexColumn)`
    align-items: flex-start;
`;

const Presentation = ({
  onCalendarMonthClick,
  monthToView,
  monthlyTotal,
  data,
  onCellsChanged,
}) => (
  <Layout>
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
      <DataSheet data={data} onCellsChanged={onCellsChanged} />
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
