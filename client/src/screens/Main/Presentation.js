import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { DataSheet } from '../../components/DataSheet';
import { MonthPicker } from '../../components/MonthPicker';
import { FlexRow } from '../../components/Flex';
import { theme, media } from '../../shared/theme';
import { formatCurr } from '../../helpers/formatCurr';

const TOP_BAR_HEIGHT = 64;

const StyledContent = styled.div`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${theme.colors.background};
`;

// Need the extra TopBarBackground so when the datasheet scrolls up,
// the border-radius of the TopBar doesn't get conflicted
const TopBarBackground = styled.div`
  height: ${TOP_BAR_HEIGHT}px;
  background-color: ${theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 1;
`;
const TopBar = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  background-color: ${theme.colors.dataSheetBackground};
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

const MonthlyHeader = styled.h3`
  font-size: .875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media.desktop`
    font-size: 1rem;
  `};
`;

const SheetsWrapper = styled(FlexRow)`
  background-color: ${theme.colors.dataSheetBackground};
  padding: 0 1rem;
  font-size: .75rem;

  ${media.desktop`
    font-size: .875rem;
  `};
`;

const NoDataWrapper = styled(SheetsWrapper)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5rem;
  height: 100%;
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
    <StyledContent>
      <TopBarBackground>
        <TopBar>
          <DateWrapper>
            <MonthPicker
              onCalendarMonthClick={onCalendarMonthClick}
              monthToView={monthToView}
            />
            <MonthlyHeader>
            Monthly Total:
              {' '}
              <b>{formatCurr(monthlyTotal)}</b>
            </MonthlyHeader>
          </DateWrapper>
        </TopBar>
      </TopBarBackground>
      {data.length === 0
        ? (
          <NoDataWrapper>
            <h2>
You haven
              {'\''}
t added any children yet.
            </h2>
            <Button type="primary">
              <Link to="/new-sitte" type="primary">
                Add a Child
              </Link>
            </Button>
          </NoDataWrapper>
        )
        : (
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
        )
      }
    </StyledContent>
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
